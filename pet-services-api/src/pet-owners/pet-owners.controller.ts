import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  UseGuards,
  Body,
  Param,
  ParseIntPipe,
  Delete,
  Post,
} from '@nestjs/common';
import { PetOwnersService } from './pet-owners.service';
import { UserRole } from '@prisma/client';
import { UserId } from 'src/auth/decorators/user-id.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { UpdateOwnerDto } from './dto/updateOwnerDto';
import { CreatedPetOwnerDto } from './dto/createdPetOwnerDto';
import { AdminUpdatedPetOwner } from './dto/adminUpdateOwnerDto';

@Controller('tutor-pet')
export class PetOwnersController {
  constructor(private readonly petOwnersService: PetOwnersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Roles(UserRole.ADMIN, UserRole.PET_PROVIDER)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async createPetOwner(@Body() data: CreatedPetOwnerDto) {
    const result = await this.petOwnersService.createGetOwner(data);
    return {
      message: result.message,
      data: result.data,
    };
  }

  @Get('meu-perfil/')
  @HttpCode(HttpStatus.OK)
  @Roles(UserRole.PET_OWNER)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async getProfilePetOwner(@UserId() userId: number) {
    const result = await this.petOwnersService.getProfilePetOwnder(userId);
    return result;
  }

  @Patch('meu-perfil/')
  @HttpCode(HttpStatus.OK)
  @Roles(UserRole.PET_OWNER)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async updatedProfilePetOwner(
    @UserId() userId: number,
    @Body() data: UpdateOwnerDto,
  ) {
    const result = await this.petOwnersService.updateProfilePetOwner(
      userId,
      data,
    );
    return result;
  }

   @Delete('meu-perfil/desativar')
  @HttpCode(HttpStatus.OK)
  @Roles(UserRole.PET_OWNER)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async deleteProfilePetOwner(@UserId() userId: number) {
    const result = await this.petOwnersService.deleteProfilePetOwner(userId);
    return result;
  }

  @Get('meus-favoritos')
  @HttpCode(HttpStatus.OK)
  @Roles(UserRole.PET_OWNER)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async getFavoritesProviders (@UserId() userId: number) {
    const result = await this.petOwnersService.getProvidersFavorites(userId);
    return result;
  }

  @Get('meus-pets')
  @HttpCode(HttpStatus.OK)
  @Roles(UserRole.PET_OWNER)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async getPetsByOwner (@UserId() userId: number) {
    const result = await this.petOwnersService.getPetsByOwner(userId);
    return result;
  }

  @Get('minhas-assinaturas')
  @HttpCode(HttpStatus.OK)
  @Roles(UserRole.PET_OWNER)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async getSignaturesByOwner (@UserId() userId: number) {
    const result = await this.petOwnersService.getSignaturesByOwner(userId);
    return result;
  }

  @Patch('editar-perfil/:petOwnerId')
  @HttpCode(HttpStatus.OK)
  @Roles(UserRole.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async AdminUpdatedProfilePetOwner(
    @Param('petOwnerId', ParseIntPipe) petOwnerId: number,
    @Body() data: AdminUpdatedPetOwner,
  ) {
    const result = await this.petOwnersService.AdminUpdatedPetOwner(
      petOwnerId,
      data,
    );
    return result;
  }


 
}
