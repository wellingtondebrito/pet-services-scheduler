import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateOwnerDto } from './dto/updateOwnerDto';
import { AdminUpdatedPetOwner } from './dto/adminUpdateOwnerDto';
import { StatusUser, UserRole } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { CreatedPetOwnerDto } from './dto/createdPetOwnerDto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { MailerService } from 'src/mailer/mailer.service';
import * as crypto from 'crypto';
@Injectable()
export class PetOwnersService {
  private supabaseCliente: SupabaseClient;
  private readonly bucketName: string = 'avatars';
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
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

  async createGetOwner(data: CreatedPetOwnerDto) {
    const existingUser = await this.prismaService.user.findUnique({
      where: { email: data.email },
    });
    if (existingUser) {
      throw new ConflictException(
        'Este e-mail já está cadastrado em nossa plataforma.',
      );
    }

    // 1. Gerar um token de reset seguro
    const resetToken = crypto.randomBytes(32).toString('hex');

    // 2. Hashear o token com bcrypt antes de salvar no banco
    const saltRounds = 10;
    const hashedResetToken = await bcrypt.hash(resetToken, saltRounds);

    // 3. Definir a data de expiração do token (ex: 1 hora a partir de agora)
    const resetTokenExpires = new Date(Date.now() + 3600000); // 1 hora em milissegundos

    const user = await this.prismaService.user.create({
      data: {
        email: data.email,
        role: UserRole.PET_OWNER,
        status: StatusUser.PENDING_VERIFICATION,
        resetToken: hashedResetToken,
        resetTokenExpiresAt: resetTokenExpires,
        createdAt: new Date(),
      },
    });

    await this.prismaService.petOwner.create({
      data: {
        userId: user.id,
        name: data.name,
        phoneNumber: data.phoneNumber,
        address: data.address,
        city: data.city,
        uf: data.uf,
        cep: data.cep,
        cpf: data.cpf,
      },
    });

    // 4. Enviar o e-mail com o token *não hasheado*
    const resetLink = `${this.configService.get('FRONTEND_URL')}/resetar-senha?token=${resetToken}&email=${user.email}`;

    await this.mailerService.sendMailJob({
      to: user.email,
      subject: 'Bem-vindo! Crie sua senha.',
      template: 'welcome-reset-password', // ou o nome do seu template
      context: { name: data.name, userEmail: user.email, resetLink: resetLink },
    });

    return {
      message:
        'Tutor criado com sucesso. Um e-mail de confirmação e redefinição de senha foi enviado.',
      data: { userId: user.id, email: user.email },
    };
  }

  private async sendPasswordResetEmail(email: string) {
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado.');
    }

    const token = await this.jwtService.signAsync(
      { sub: user.id, email: user.email },
      { expiresIn: '1h' },
    );
    const resetLink = `${this.configService.get('FRONTEND_URL')}/resetar-senha?token=${token}`;
    console.log(`Enviando e-mail para ${email} com o link: ${resetLink}`);
  }

  async getProfilePetOwnder(userId: number) {
    const profile = await this.prismaService.petOwner.findUnique({
      where: {
        userId,
      },
      select: {
        id: true,
        name: true,
        address: true,
        phoneNumber: true,
        cpf: true,
        city: true,
        uf: true,
        cep: true,
        avatarUrl: true,
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });

    if (!profile) throw new NotFoundException('Tutor não encontrado');

    return {
      message: 'Tutor encontrado',
      data: profile,
    };
  }

  async updateProfilePetOwner(userId: number, data: UpdateOwnerDto) {
    const profile = this.prismaService.petOwner.findUnique({
      where: {
        userId,
      },
      select: {
        id: true,
      },
    });

    if (!profile) throw new NotFoundException('Tutor não encontrado');

    const updatedProfile = await this.prismaService.petOwner.update({
      where: {
        userId,
      },
      select: {
        id: true,
        name: true,
        address: true,
        phoneNumber: true,
        city: true,
        uf: true,
        cep: true,
        user: {
          select: {
            id: true,
            email: true,
            updatedAt: true,
          },
        },
      },
      data: {
        name: data.name,
        address: data.address,
        phoneNumber: data.phoneNumber,
        city: data.city,
        uf: data.uf,
        cep: data.cep,
        user: {
          update: {
            email: data.email,
            updatedAt: new Date(),
          },
        },
      },
    });

    return {
      message: 'Tutor atualizado',
      data: {
        id: updatedProfile.id,
        name: updatedProfile.name,
        address: updatedProfile.address,
        phoneNumber: updatedProfile.phoneNumber,
        city: updatedProfile.city,
        uf: updatedProfile.uf,
        cep: updatedProfile.cep,
        user: {
          userId: updatedProfile.user.id,
          email: updatedProfile.user.email,
          updatedAt: updatedProfile.user.updatedAt,
        },
      },
    };
  }

  async AdminUpdatedPetOwner(petOwnerId: number, data: AdminUpdatedPetOwner) {
    const petOwner = await this.prismaService.petOwner.findUnique({
      where: {
        id: petOwnerId,
      },
      select: {
        id: true,
        user: {
          select: {
            id: true,
            email: true,
            status: true,
          },
        },
      },
    });

    if (!petOwner) throw new NotFoundException('Tutor não encontrado');

    const updatedPetOwner = await this.prismaService.petOwner.update({
      where: {
        id: petOwnerId,
      },
      select: {
        id: true,
        name: true,
        address: true,
        phoneNumber: true,
        cpf: true,
        city: true,
        uf: true,
        cep: true,
        avatarUrl: true,
        user: {
          select: {
            id: true,
            email: true,
            status: true,
            updatedAt: true,
          },
        },
      },
      data: {
        user: {
          update: {
            status: data.status,
            updatedAt: new Date(),
          },
        },
      },
    });

    return {
      message: 'Tutor atualizado',
      data: {
        petOwnerId: updatedPetOwner.id,
        name: updatedPetOwner.name,
        address: updatedPetOwner.address,
        phoneNumber: updatedPetOwner.phoneNumber,
        city: updatedPetOwner.city,
        uf: updatedPetOwner.uf,
        cep: updatedPetOwner.cep,
        avatarUrl: updatedPetOwner.avatarUrl,
        cpf: updatedPetOwner.cpf,
        user: updatedPetOwner.user,
      },
    };
  }

  async deleteProfilePetOwner(userId: number) {
    const profile = this.prismaService.petOwner.findUnique({
      where: {
        userId,
      },
      select: {
        id: true,
        avatarUrl: true,
      },
    });

    if (!profile) throw new NotFoundException('Tutor não encontrado');

    await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        status: StatusUser.INACTIVE,
        deletedAt: new Date(),
      },
    });

    await this.deletePetOwnerStorage(profile as any);

    return {
      message: 'Sua conta foi temporariamente desativada',
    };
  }

  async adminDeleteProfilePetOwner(petOwnerId: number) {
    const petOwner = await this.prismaService.petOwner.findUnique({
      where: {
        id: petOwnerId,
      },
      select: {
        id: true,
        avatarUrl: true,
        user: {
          select: {
            id: true,
            status: true,
            deletedAt: true,
          },
        },
      },
    });

    if (!petOwner) throw new NotFoundException('Tutor não encontrado');

    await this.prismaService.user.update({
      where: {
        id: petOwner.user.id,
      },
      data: {
        status: StatusUser.INACTIVE,
        deletedAt: new Date(),
      },
    });

    await this.deletePetOwnerStorage(petOwner as any);

    return {
      message: 'Tutor temporariamente desativado',
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

  private async deletePetOwnerStorage(provider: {
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
  }

  async getProvidersFavorites(userId: number) {
    const profile = await this.prismaService.petOwner.findUnique({
      where: {
        userId,
      },
      select: {
        id: true,
      },
    });

    if (!profile) throw new NotFoundException('Tutor não encontrado');

    const favorites = await this.prismaService.favoriteProviders.findMany({
      where: {
        petOwnerId: profile.id,
      },
      select: {
        id: true,
        providers: {
          select: {
            id: true,
            companyName: true,
            cnpj: true,
            avatarUrl: true,
            address: true,
            phoneNumber: true,
            city: true,
            uf: true,
            cep: true,
          },
        },
      },
    });

    if (!favorites) throw new NotFoundException('nenhum dado encontrado');

    return favorites.length === 0
      ? {
          message: 'Nenhum favorito encontrado',
          data: [],
        }
      : {
          message: 'Favoritos encontrados',
          data: favorites,
        };
  }

  async getPetsByOwner(userId: number) {
    const profile = await this.prismaService.petOwner.findUnique({
      where: {
        userId,
      },
      select: {
        id: true,
      },
    });
    if (!profile) throw new NotFoundException('Tutor não encontrado');

    const petsByOwners = await this.prismaService.pet.findMany({
      where: {
        ownerId: profile.id,
      },
      select: {
        id: true,
        name: true,
        age: true,
        breed: true,
        height: true,
        type: true,
        weight: true,
      },
    });
    if (!petsByOwners) throw new NotFoundException('Nenhum dado encontrado');

    return petsByOwners.length === 0
      ? {
          message: 'Nenhum pet encontrado',
          data: [],
        }
      : {
          message: 'Pets encontrados',
          data: petsByOwners,
        };
  }

  async getSignaturesByOwner(userId: number) {
    const profile = await this.prismaService.petOwner.findUnique({
      where: {
        userId,
      },
      select: {
        id: true,
      },
    });

    if (!profile) throw new NotFoundException('Tutor não encontrado');
    const signatures = await this.prismaService.signatures.findMany({
      where: {
        ownerId: profile.id,
      },
      select: {
        id: true,
        status: true,
        plan: {
          select: {
            id: true,
            name: true,
            description: true,
            durationMonths: true,
            price: true,
            recurrence: true,
            planServices: {
              select: {
                serviceId: true,
                service: true,
              },
            },
            provider: true,
          },
        },
      },
    });
    if (!signatures) throw new NotFoundException('Nenhum dado encontrado');

    return signatures.length === 0
      ? {
          message: 'Nenhuma assinatura encontrada',
          data: [],
        }
      : {
          message: 'Assinaturas encontradas',
          data: signatures,
        };
  }

  async getAppointmmentsByOwner(userId: number) {
    const provile = await this.prismaService.petOwner.findUnique({
      where: {
        userId,
      },
      select: {
        id: true,
      },
    });

    if (!provile) throw new NotFoundException('Tutor não encontrado');

    const appointments = await this.prismaService.appointment.findMany({
      where: {
        petOwnerId: provile.id,
      },
      select: {
        id: true,
        date: true,
        status: true,
        pet:{
          select:{
            id: true,
            name: true,
            type: true,
          }
        },
        service: {
          select: {
            id: true,
            name: true,
            description: true,
            price: true,
            serviceType: true,
            durationMinutes: true,
            provider: {
              select: {
                id: true,
                companyName: true,
                address: true,
                phoneNumber: true,
                city: true,
                uf: true,
                cep: true,
                avatarUrl: true,
              }
            }
          },
        },
      },
    });
    if(!appointments) throw new NotFoundException('Nenhum dado encontrado');

    return appointments.length === 0
      ? {
          message: 'Nenhum agendamento encontrado',
          data: [],
        }
      : {
          message: 'Agendamentos encontrados',
          data: appointments,
        };  
  }
}
