import { Module } from '@nestjs/common';
import { PetProvidersService } from './pet-providers.service';
import { PetProvidersController } from './pet-providers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PetProvidersService],
  controllers: [PetProvidersController]
})
export class PetProvidersModule {}
