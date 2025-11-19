import { Module } from '@nestjs/common';
import { PetOwnersService } from './pet-owners.service';
import { PetOwnersController } from './pet-owners.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from '../mailer/mailer.module';

@Module({
  imports: [PrismaModule, ConfigModule, MailerModule, JwtModule.register({
    secret: process.env.JWT_SECRET || 'defaultSecretKey',
    global: true,
    signOptions: { expiresIn: '86400s' },
})],
  providers: [PetOwnersService],
  controllers: [PetOwnersController],
  exports:[JwtModule]

})
export class PetOwnersModule {}
