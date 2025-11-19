import { Controller, UseGuards, HttpCode, HttpStatus, Post, Param, ParseIntPipe} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { UserRole } from '@prisma/client';
import { UserId } from 'src/auth/decorators/user-id.decorator';
import { FavoritesPetProvidersService } from 'src/favorites-pet-providers/favorites-pet-providers.service';

@Controller('favorites-pet-providers')
export class FavoritesPetProvidersController {

    constructor(private readonly favoritesPetProvidersService: FavoritesPetProvidersService) {}

    @Post('favoritos/:providerId')
      @HttpCode(HttpStatus.OK)
      @Roles(UserRole.PET_OWNER)
      @UseGuards(AuthGuard('jwt'), RolesGuard)
      async addFavoriteProviders (
        @Param('providerId', ParseIntPipe) petProviderId: number,
        @UserId() petOwnerId: number,
      ) {
        const result = await this.favoritesPetProvidersService.addFavoriteProviders(petProviderId, petOwnerId);
        return result;
      }
}
