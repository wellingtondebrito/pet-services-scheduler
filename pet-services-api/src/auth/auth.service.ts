import { ConflictException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
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
        location: data.location,
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
        id: user.id,
        email:user.email,
        petProviderProfile: providerProfile,
      }
    });

    return petProvider;    
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
      where: { email: email },
    });
    
    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      throw new UnauthorizedException('Senha inválida');
    }
    return user;
  }

}
