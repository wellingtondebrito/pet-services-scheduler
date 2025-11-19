import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Prisma, StatusUser, UserRole } from '@prisma/client';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatedPetProviderDto } from './dto/updatedPetProvider.dto';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class PetProvidersService {
  private supabaseCliente: SupabaseClient;
  private readonly bucketName: string = 'avatars';
  private readonly galleryBucketName: string = 'gallery';
  constructor(
    private prismaService: PrismaService,
    private configService: ConfigService,
  ) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_KEY');
    if (!supabaseUrl || !supabaseKey) {
      throw new Error(
        'SUPABASE_URL and SUPABASE_KEY must be set in the environment',
      );
    }
    this.supabaseCliente = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    });
  }

  async searchPetProviders(): Promise<any> {
    const petProviders = await this.prismaService.petProvider.findMany({
      select: {
        id: true,
        companyName: true,
        phoneNumber: true,
        address: true,
        cep: true,
        city: true,
        uf: true,
        latitude: true,
        longitude: true,
        avatarUrl: true,
        description: true,
        reviews: true,
        images: true,
        services: true,
      },
    });

    return {
      message: 'Prestadores encontrados com sucesso',
      data: petProviders.map((provider) => ({
        id: provider.id,
        companyName: provider.companyName,
        phoneNumber: provider.phoneNumber,
        coordinates: {
          latitude: provider.latitude,
          longitude: provider.longitude,
        },
        address: provider.address,
        city: provider.city,
        uf: provider.uf,
        cep: provider.cep,
        avatarUrl: provider.avatarUrl,
        description: provider.description,
        reviews: provider.reviews,
        images: provider.images,
        services: provider.services,
      })),
    };
  }

  async findAllPetProviders(role: UserRole): Promise<any> {
    if (role !== UserRole.ADMIN) {
      return new UnauthorizedException(
        'Você não tem permissão para acessar esta rota',
      );
    }

    const petProviders = await this.prismaService.petProvider.findMany({
      select: {
        id: true,
        companyName: true,
        phoneNumber: true,
        address: true,
        name: true,
        cep: true,
        city: true,
        uf: true,
        latitude: true,
        longitude: true,
        avatarUrl: true,
        description: true,
        reviews: true,
        images: true,
        services: true,
        cnpj: true,
        cpf: true,
        employees: true,
        user: {
          select: {
            id: true,
            email: true,
            role: true,
            status: true,
          },
        },
      },
    });

    return {
      message: 'Prestadores encontrados com sucesso',
      data: petProviders.map((provider) => {
        return {
          id: provider.id,
          companyName: provider.companyName,
          avatarUrl: provider.avatarUrl,
          description: provider.description,
          phoneNumber: provider.phoneNumber,
          coordinates: {
            latitude: provider.latitude,
            longitude: provider.longitude,
          },
          address: provider.address,
          name: provider.name,
          city: provider.city,
          uf: provider.uf,
          cnpj: provider.cnpj,
          cpf: provider.cpf,
          cep: provider.cep,
          employes: provider.employees,
          infoUser: {
            userId: provider.user.id,
            email: provider.user.email,
            role: provider.user.role,
            status: provider.user.status,
          },
        };
      }),
    };
  }

  async updatedPetProvider(
    providerId: number,
    data: UpdatedPetProviderDto,
    userId: number,
    role: UserRole,
  ) {
    const targetProvider = await this.prismaService.petProvider.findUnique({
      where: { id: providerId },
      select: { userId: true, id: true },
    });

    if (!targetProvider)
      throw new NotFoundException('Prestador não encontrado');

    const isOwner = targetProvider.userId === userId;

    if (!isOwner && role !== UserRole.ADMIN)
      throw new UnauthorizedException(
        'Você não tem permissão para acessar esta rota',
      );

    const updatedProvider = await this.prismaService.petProvider.update({
      where: { id: providerId },
      data: {
        ... data, user: {
          update: {
            updatedAt: new Date(),
            email: data.email
          }
        }
      }
    });

    return {
      message: 'Prestador atualizado com sucesso',
      data: updatedProvider,
    };
  }

  private getPathFromPublicUrl(
    url: string | null | undefined,
    bucket: string,
  ): string | null {
    if (!url) return null;
    try {
      const pathname = new URL(url).pathname;
      const marker = `/public/${bucket}/`;
      const idx = pathname.indexOf(marker);
      if (idx === -1) return null;
      return pathname.substring(idx + marker.length);
    } catch (err) {
      // URL malformada
      return null;
    }
  }

  async deletePetProvider(providerId: number, userId: number, role: UserRole) {
    const targetProvider = await this.prismaService.petProvider.findUnique({
      where: { id: providerId },
      // 🚩 Tipagem melhorada com include dos dados
      select: {
        userId: true,
        id: true,
        avatarUrl: true,
        images: {
          select: { url: true },
        },
        reviews: true,
        services: true,
        employees: true,
        subscriptions: true,
      },
    });

    // 1. CHECAGEM DE EXISTÊNCIA (Primeiro passo crucial)
    if (!targetProvider)
      throw new NotFoundException('Prestador não encontrado');

    // 2. CHECAGEM DE AUTORIZAÇÃO (Segundo passo crucial)
    const isProvider = targetProvider.userId === userId;

    if (role !== UserRole.ADMIN && !isProvider)
      throw new UnauthorizedException(
        'Você não tem permissão para acessar esta rota',
      );
      
      await this.prismaService.user.update({
        where: { id: targetProvider.userId },data:{
          status: StatusUser.INACTIVE,
          deletedAt: new Date(),
  
        }
      });


    // 3. LIMPEZA DO SUPABASE (Apenas após a autorização)
    await this.deleteProviderStorage(targetProvider as any); // Tipagem provisória

    return {
      message: 'Prestador temporariamente desativado com sucesso',
    };
  }

  // 📦 FUNÇÃO AUXILIAR: Centralizando a lógica de deleção do Storage
  private async deleteProviderStorage(provider: {
    avatarUrl: string | null;
    images: { url: string }[];
  }) {
    // --- Deleção do Avatar ---
    const avatarPath = provider.avatarUrl
      ? this.getPathFromPublicUrl(provider.avatarUrl, this.bucketName)
      : null;

    if (avatarPath) {
      const { error } = await this.supabaseCliente.storage
        .from(this.bucketName)
        .remove([avatarPath]);

      if (error) {
        // Logar ou tratar o erro, mas não impedir a deleção do DB,
        // a menos que seja crítico (aqui vamos lançar para simplificar).
        throw new Error(`Error deleting avatar: ${error.message}`);
      }
    }

    // --- Deleção da Galeria ---
    const galleryPaths = provider.images
      .map((image) =>
        this.getPathFromPublicUrl(image.url, this.galleryBucketName),
      )
      .filter((path): path is string => path !== null); // Filtra e garante que o tipo é string[]

    if (galleryPaths.length > 0) {
      const { error } = await this.supabaseCliente.storage
        .from(this.galleryBucketName)
        .remove(galleryPaths);

      if (error) {
        throw new Error(`Error deleting gallery images: ${error.message}`);
      }
    }
  }

  async findProviderByCoordinates(
  latitude: number,
  longitude: number,
): Promise<any> {
  const RADIUS_KM = 2;
  const EARTH_RADIUS_KM = 6371;

  console.log({ latitude, longitude });


  // 1. PRIMEIRA ETAPA: Cálculo de Distância (SQL Bruto)
  // Usa $queryRaw para calcular a distância (Haversine) e filtrar os IDs que estão no raio.
  // Seleciona APENAS o ID e a distância para ser extremamente rápido.
  const rawResults = await this.prismaService.$queryRaw(
    Prisma.sql`
      SELECT 
        "id", 
        (
          ${EARTH_RADIUS_KM} * acos(
            cos(radians(${latitude})) * cos(radians("latitude")) * cos(radians("longitude") - radians(${longitude}))
            + sin(radians(${latitude})) * sin(radians("latitude"))
          )
        ) AS distance
      FROM "PetProvider"
      WHERE (
        ${EARTH_RADIUS_KM} * acos(
          cos(radians(${latitude})) * cos(radians("latitude")) * cos(radians("longitude") - radians(${longitude}))
          + sin(radians(${latitude})) * sin(radians("latitude"))
        )
      ) <= ${RADIUS_KM}
      ORDER BY distance ASC;
    `,
  );

  // Garante que o resultado da query bruta é tratado como um array
  const rawProviders = rawResults as any[]; 

  // Se não houver resultados, retorna imediatamente.
  if (rawProviders.length === 0) {
    return { message: 'Nenhum prestador encontrado no raio de 10km.', data: [] };
  }
  
  // Extrai uma lista simples de IDs para a próxima consulta (ex: [101, 205, 333])
  const providerIds = rawProviders.map(provider => provider.id);

  // 2. SEGUNDA ETAPA: Carregar os Relacionamentos (Prisma ORM)
  // Usa os IDs da primeira etapa para buscar os dados detalhados e as relações (reviews, images, etc.).
  const detailedProviders = await this.prismaService.petProvider.findMany({
    where: {
      id: {
        in: providerIds, // Filtra apenas pelos IDs que estão próximos
      },
    },
    include: { // O include funciona perfeitamente aqui para carregar as relações
      images: true, 
      reviews: true,
      services: true,
      // ... outras relações importantes
    },
  });

  // 3. TERCEIRA ETAPA: Otimização e Mesclagem dos Dados
  // Cria um mapa/índice para buscar a distância de forma rápida (O(1)).
  const distanceMap = rawProviders.reduce((map, provider) => {
    map[provider.id] = provider.distance;
    return map;
  }, {});
  
  // Mapeia os dados detalhados e injeta o campo 'distance' do mapa.
  return {
    message: 'Prestadores encontrados com sucesso',
    // Mapeia os dados detalhados e injeta a distância calculada
    data: detailedProviders.map((provider) => ({
      id: provider.id,
      companyName: provider.companyName,
      phoneNumber: provider.phoneNumber,
      
      // ✅ Mescla o dado de distância usando o ID como chave (Lookup rápido)
      distance: distanceMap[provider.id], 
      
      coordinates: {
        latitude: provider.latitude,
        longitude: provider.longitude,
      },
      address: provider.address,
      city: provider.city,
      uf: provider.uf,
      cep: provider.cep,
      avatarUrl: provider.avatarUrl,
      description: provider.description,
      
      // As relações agora estão carregadas corretamente pelo 'include'
      reviews: provider.reviews,
      images: provider.images,
      services: provider.services,
    })),
  };
}
 async findClients(userId: number) {

  const  providerProfile = await this.prismaService.petProvider.findUnique({
    where: { userId: userId },
    select: {
      id: true,
    },
  });

  if (!providerProfile) {
    throw new NotFoundException('Prestador não encontrado');
  }

  const providerId = providerProfile.id;


    const uniqueOwnersId = await this.prismaService.appointment.groupBy({
      by:['petOwnerId'],
      where:{
        petOwnerId: providerId,
        petOwner: {NOT: undefined }
      }
    })

    const ownerIds = uniqueOwnersId.map(appointment => appointment.petOwnerId)

    if(ownerIds.length === 0) {
      return {
        message: 'Nenhum cliente encontrado',
        data: [],
        status: 200,
      }
    }

    const clients = await this.prismaService.petOwner.findMany({
      where: {
        id: {
          in: ownerIds
        }
      },
      select: {
        id: true,
        name: true,
        avatarUrl: true,
        address: true,
        city: true,
        uf: true,
        cep: true,
        phoneNumber: true,
        cpf: true,
        user: {
          select: {
            id: true,
            email: true,
          },
        },
        pets:{
          select:{
            id: true,
            name: true,
            age: true,
            type: true,
            breed: true,
            height: true,
            weight: true,
          }
        }
      },
    });

    return clients;
  }

  async findPetProviderById(providerId: number) {
    const providerProfile = await this.prismaService.petProvider.findUnique({
      where: { id: providerId },
      select: {
        id: true,
        companyName: true,
        phoneNumber: true,
        address: true,
        name: true,
        cep: true,
        city: true,
        uf: true,
        cnpj: true,
        cpf: true,
        latitude: true,
        longitude: true,
        avatarUrl: true,
        description: true,
        reviews: true,
        images: true,
        services: true,
      },
    });
    return {
      messge: 'Prestador encontrado com sucesso',
      data: { 
        id: providerProfile?.id,
        companyName: providerProfile?.companyName,
        phoneNumber: providerProfile?.phoneNumber,
        coordinates: {
          latitude: providerProfile?.latitude,
          longitude: providerProfile?.longitude,
        },        
        address: providerProfile?.address,
        city: providerProfile?.city,
        uf: providerProfile?.uf,
        cep: providerProfile?.cep,
        avatarUrl: providerProfile?.avatarUrl,
        description: providerProfile?.description,
        reviews: providerProfile?.reviews,
        images: providerProfile?.images,
        services: providerProfile?.services,
        cnpj: providerProfile?.cnpj,
        cpf: providerProfile?.cpf,
      },
        
      status: 200,
    }
       
  }

  async findAppointmentS(userId: number){

    const providerProfile = await this.prismaService.petProvider.findUnique({
      where: { userId: userId },
     select:{id: true,}
    });

    if(!providerProfile){
      throw new NotFoundException('Prestador não encontrado');    
    }

    const appointments = await this.prismaService.appointment.findMany({
      where: {providerId: providerProfile.id},
      select:{
        id: true,
        date: true,
        service: true,
        totalPrice: true,        
        status: true,
        pet:{
          select:{
            id: true,
            name: true,
            type: true,
            breed: true,
            age: true,
            height: true,
            weight: true,
          }
        },
        petOwner: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
            phoneNumber: true,}
      },
    }
    })

    if(appointments.length === 0){
      return {
        message: 'Nenhum agendamento encontrado',
        data: [],
        status: 200,
      }
    }

    return {
      message: 'Agendamentos encontrados com sucesso',
      data: appointments,
      status: 200,
    }

  }

  async findReviews(userId: number) {
    const providerProfile = await this.prismaService.petProvider.findUnique({
      where: { userId: userId },
     select:{id: true,}
    });

    if(!providerProfile){
      throw new NotFoundException('Prestador não encontrado');    
    }

    const reviews = await this.prismaService.review.findMany({
      where: {providerId: providerProfile.id},
      select:{
        id: true,
        rating: true,
        comment: true,
        petOwner: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          }
        }
      }
    })

    if(reviews.length === 0){
      return {
        message: 'Nenhuma avaliação encontrada',
        data: [],
        status: 200,
      }
    }
    
    return {
      message: 'Avaliações encontradas com sucesso',
      data: reviews,
      status: 200,
    }
  
  }

  async findImages(userId: number) {

    const providerProfile = await this.prismaService.petProvider.findUnique({
      where: { userId: userId },
     select:{id: true,}
    });

    if(!providerProfile) throw new NotFoundException('Prestador não encontrado');    

    const images = await this.prismaService.providerImage.findMany({
      where: {providerId: providerProfile.id},      select:{
        id: true,
        url: true,
        altText: true,
        isCover: true,
        createdAt: true,           
      }
    })

    if(images.length === 0){
      return {
        message: 'Nenhuma imagem encontrada',
        data: [],
        status: 200,
      }
    }

    return {
      message: 'Imagens encontradas com sucesso',
      data: images,
      status: 200,
    }

  }


}
