import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRole } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatedPetProviderDto } from './dto/updatedPetProvider.dto';

@Injectable()
export class PetProvidersService {
  constructor(private prismaService: PrismaService) {}

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
        location: true,
        avatarUrl: true,
        description: true,
        reviews: true,
        images: true,
        services: true,
      },
    });

    return petProviders;
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
        location: true,
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
          },
        },
      },
    });

    return petProviders;
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

    if(!targetProvider) throw new NotFoundException('Prestador não encontrado')

    const isOwner = targetProvider.userId === userId;

    if(!isOwner && role !== UserRole.ADMIN) throw new UnauthorizedException('Você não tem permissão para acessar esta rota')
    
    const updatedProvider = await this.prismaService.petProvider.update({
      where: { id: providerId },
      data
      })

    return {
        message: 'Prestador atualizado com sucesso',
        data: updatedProvider
    }   
  }
}
