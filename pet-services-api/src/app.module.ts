import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { StorageModule } from './storage/storage.module';
import { PetProvidersModule } from './pet-providers/pet-providers.module';
import { PetOwnersModule } from './pet-owners/pet-owners.module';
import { FavoritesPetProvidersModule } from './favorites-pet-providers/favorites-pet-providers.module';
import { BullModule } from '@nestjs/bullmq';
import { ConfigModule, ConfigService } from '@nestjs/config';
//import { MailerModule } from './mailer/mailer.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'; // Import necessário!

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    StorageModule,
    PetProvidersModule,
    PetOwnersModule,
    FavoritesPetProvidersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        connection: {
          host: configService.get('REDIS_HOST'), // Lê 'redis' do .env
          port: parseInt(configService.get('REDIS_PORT')!, 10),
        },
      }),
    }),
    MailerModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: configService.get('EMAIL_HOST'),
          port: parseInt(configService.get('EMAIL_PORT')!, 10),
          secure: false,
          auth: {
            user: configService.get('EMAIL_USER'),
            pass: configService.get('EMAIL_PASS'),
          },
        },
        template: {
          dir: process.cwd() + '/src/mailer/templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        }
      })
    })
   
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
