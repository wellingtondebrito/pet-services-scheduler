import { Module } from '@nestjs/common';
import { FavoritesPetProvidersController } from './favorites-pet-providers.controller';
import { FavoritesPetProvidersService } from './favorites-pet-providers.service';

@Module({
  controllers: [FavoritesPetProvidersController],
  providers: [FavoritesPetProvidersService]
})
export class FavoritesPetProvidersModule {}
