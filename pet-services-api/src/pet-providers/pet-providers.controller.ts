import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
  Patch,
  Param,
} from '@nestjs/common';
import { PetProvidersService } from './pet-providers.service';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { UserRoleDecorator } from 'src/auth/decorators/user-role-decorator';
import { UpdatedPetProviderDto } from './dto/updatedPetProvider.dto';
import { UserId } from 'src/auth/decorators/user-id.decorator';

@Controller('prestadores-servicos')
export class PetProvidersController {
  constructor(private petProvidersService: PetProvidersService) {}

  @Get('search')
  @HttpCode(HttpStatus.OK)
  async searchPetProviders(): Promise<any> {
    const result = await this.petProvidersService.searchPetProviders();
    return result;
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  @Roles(UserRole.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async findAllPetProviders(@UserRoleDecorator() role: UserRole): Promise<any> {
    const result = await this.petProvidersService.findAllPetProviders(role);
    return result;
  }

  @Patch(':providerId')
  @HttpCode(HttpStatus.OK)
  @Roles(UserRole.ADMIN, UserRole.PET_PROVIDER)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async updatedPetProvider(
    @Param('providerId') providerId: number,
    @Body() data: UpdatedPetProviderDto,
    @UserId() userId: number,
    @UserRoleDecorator() role: UserRole,
  ) {
    const result = await this.petProvidersService.updatedPetProvider(
      providerId,
      data,
      userId,
      role,
    );
    return result;
  }
}
