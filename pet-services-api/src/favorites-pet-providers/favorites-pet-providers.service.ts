import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavoritesPetProvidersService {
    constructor(private readonly prismaService: PrismaService){}

    async addFavoriteProviders(petProviderId: number, petOwnerId: number) {
    const provider = await this.prismaService.petProvider.findUnique({
      where: {
        id: petProviderId,
      },
    });

    if (!provider) throw new Error('Prestador não encontrado');

    const owner = await this.prismaService.petOwner.findUnique({
      where: {
        userId: petOwnerId,
      },
    });

    if (!owner) throw new Error('Tutor não encontrado');

    const existFavoriteProvider =
      await this.prismaService.favoriteProviders.findFirst({
        where: {
          petOwnerId: owner.id,
          petProviderId: provider.id,
        },
      });

    if (existFavoriteProvider) {
      throw new ForbiddenException(
        'Este pretador já está na sua lista de favoritos',
      );
    }

    const favoriteProvider = await this.prismaService.favoriteProviders.create({
      data: {
        petOwnerId: owner.id,
        petProviderId: provider.id,
      },
    });

    return {
      message: 'Prestador adicionado aos favoritos',
      data: {
        id: favoriteProvider.id,
        petProvider: {
          id: provider.id,
          companyName: provider.companyName,
          description: provider.description,
          address: provider.address,
          phoneNumber: provider.phoneNumber,
          city: provider.city,
          uf: provider.uf,
          cep: provider.cep,
          avatarUrl: provider.avatarUrl,
        },
      },
    };
  }

}
