import { ConflictException, ForbiddenException, HttpCode, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterPetProviderDto } from '../auth/dto/RegisterPetProviderDto';
import { PrismaService } from '../prisma/prisma.service';
import { UserRole } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { RegisterPetOwnerDto } from './dto/RegisterPetOwnerDto';
import { LoginDto } from './dto/LoginDto';
import { JwtService } from '@nestjs/jwt';
import { RegisterAdminDto } from './dto/RegisterAdminDto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) {}

  async registerPetProvider(data: RegisterPetProviderDto) {

    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) throw new ConflictException('Este e-mail já está cadastrado em nossa plataforma.');

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    const petProvider =await this.prisma.$transaction(async (tx) => {
      // TODO: add transactional DB operations using tx, for example:
     const user = await tx.user.create({
      data:{
        email: data.email,
        password: hashedPassword,
        role: UserRole.PET_PROVIDER,
      }
     });

     const providerProfile = await tx.petProvider.create({
      data:{
        userId: user.id,
        companyName: data.companyName,
        description: data.description as any,
        latitude: data.latitude,
        longitude: data.longitude,
        name: data.name,
        phoneNumber: data.phoneNumber,
        address: data.address,
        city: data.city,
        uf: data.uf,
        cep: data.cep,
        cnpj: data.cnpj,
        cpf: data.cpf,
      }
     });
      return {
        userId: user.id,
        email:user.email,
        providerProfile: {
          companyName: providerProfile.companyName,
          description: providerProfile.description,
          coordinates:{
            latitude: providerProfile.latitude,
            longitude: providerProfile.longitude,
          },
          admin: providerProfile.name,
          phoneNumber: providerProfile.phoneNumber,
          address: providerProfile.address,
          city: providerProfile.city,
          uf: providerProfile.uf,
          cep: providerProfile.cep,
          cnpj: providerProfile.cnpj,
          cpf: providerProfile.cpf,
        },
      }
    });

    return {
      message: `${petProvider.providerProfile.companyName} registrado com sucesso!`,
      data: petProvider,
      status: HttpCode(HttpStatus.CREATED)
    };    
  }

  async registerPetOwner(data: RegisterPetOwnerDto) {

     const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) throw new ConflictException('Este e-mail já está cadastrado em nossa plataforma.');

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    
    const petOwner = await this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email: data.email,
          password: hashedPassword,
          role: UserRole.PET_OWNER,
        },
      });
      const ownerProfile = await tx.petOwner.create({
        data: {
          userId: user.id,
          name: data.name,
          phoneNumber: data.phoneNumber,
          address: data.address as any,
          city: data.city as any,
          uf: data.uf as any,
          cep: data.cep as any,
          cpf: data.cpf,
        },
      });
      return {
        id: user.id,
        email: user.email,
        petOwnerProfile: ownerProfile,
      };
    });

    return petOwner;
  }

  async registerAdmin(data: RegisterAdminDto) {

     const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) throw new ConflictException('Este e-mail já está cadastrado em nossa plataforma.');

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    
    const newAdmin = await this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email: data.email,
          password: hashedPassword,
          role: UserRole.ADMIN,
        },
      });
      const adminProfile = await tx.admin.create({
        data: {
          userId: user.id,
          name: data.name,
        },
      });
      return {
        id: user.id,
        email: user.email,
        adminProfile: adminProfile,
      };
    });

    return newAdmin;
  }

  async login(data: LoginDto) {
   
    const user = await this.validateUser(data.email, data.password);

    const payload = {sub: user.id, role: user.role};
    
    return { 
      access_token: await this.jwtService.signAsync(payload),
    }
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { email: email},
    });
    
    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const now = new Date();
    const GRACE_PERIOD_MS = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

    if(user.status === 'INACTIVE' && user.deletedAt){
      const elapsedTime = now.getTime() - user.deletedAt.getTime();
      if(elapsedTime < GRACE_PERIOD_MS){
        await this.prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            status: 'ACTIVE',
            deletedAt: null,
          },
        })
      }
      else {
        throw new ForbiddenException('Conta temporariamente desativada');
      }
   
    }

     if(user.status === 'BLOCKED'){
      throw new ForbiddenException('Conta bloqueada');
    }

    if(!user.password){
      throw new UnauthorizedException('Usuário não possui senha');
    }
     
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      throw new UnauthorizedException('Senha inválida');
    }
    return user;
  }

}
