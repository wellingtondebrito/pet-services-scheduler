import { Module } from '@nestjs/common';
import { PetProvidersService } from './pet-providers.service';
import { PetProvidersController } from './pet-providers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PrismaModule, ConfigModule],
  providers: [PetProvidersService],
  controllers: [PetProvidersController]
})
export class PetProvidersModule {}
