import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { StorageModule } from './storage/storage.module';
import { PetProvidersModule } from './pet-providers/pet-providers.module';

@Module({
  imports: [AuthModule, PrismaModule, StorageModule, PetProvidersModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
