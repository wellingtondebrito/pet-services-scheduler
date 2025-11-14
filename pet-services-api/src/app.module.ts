import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [AuthModule, PrismaModule, StorageModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
