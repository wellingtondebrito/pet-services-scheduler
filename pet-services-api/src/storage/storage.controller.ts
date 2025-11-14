import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Get,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
  Delete,
  Logger,
} from '@nestjs/common';
import { StorageService } from './storage.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadDto } from './dto/uploadDto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { UserId} from 'src/auth/decorators/user-id.decorator';
import { UserRoleDecorator } from 'src/auth/decorators/user-role-decorator';
import { UpdateImageDto } from './dto/update-image.dto';

@Controller('storage')
export class StorageController {
  private readonly logger = new Logger(StorageController.name);

  constructor(private readonly storageService: StorageService) {}

  @Post('avatar-profile')
  @Roles(UserRole.PET_PROVIDER, UserRole.PET_OWNER)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: UploadDto,
    @UserId() userId: number,
    @UserRoleDecorator() role: UserRole,
  ) {
    const result = await this.storageService.saveFileAvatar(
      file,
      userId,
      role,
    );
    return result;
  }

  @Post('upload-galery')
  @Roles(UserRole.PET_PROVIDER)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @UseInterceptors(FilesInterceptor('files', 10))
  async uploadFiles(
    @UploadedFiles() files: Array<UploadDto>,
    @UserId() userId: number,
  ) {
    const galleryResults = await this.storageService.uploadGalleryImages(
      files,
      userId,
    );
    return galleryResults;
  }

  @Patch('gallery/:imageId')
  @Roles(UserRole.PET_PROVIDER)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async updateImageMetadata(
    @Param('imageId', ParseIntPipe) imageId: number,
    @Body() updateDto: UpdateImageDto,
    @UserId() userId: number,
  ) {
    const result = await this.storageService.updateImageMetadata(imageId, updateDto, userId);
    return result;
  }

  @Get('gallery/:providerId')
  async findImagesByProviderId(@Param('providerId', ParseIntPipe) providerId: number) {
    this.logger.debug(`findImagesByProviderId providerId=${providerId}`);
    const images = await this.storageService.findImagesByProviderId(providerId);
    return images;
  }

  @Get('avatar-profile')
  @Roles(UserRole.PET_PROVIDER, UserRole.PET_OWNER)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async findAvatarUrlById(
    @UserId() userId: number,
    @UserRoleDecorator() role: UserRole,
  ) {
    const result = await this.storageService.findAvatarUrlById(
      userId,
      role,
    );
    return result;
  }

  @Delete('avatar-profile')
  @Roles(UserRole.PET_OWNER, UserRole.PET_PROVIDER)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async deleteAvatarById(@UserId() userId: number, @UserRoleDecorator() role: UserRole){
    const result = await this.storageService.deleteAvatar(userId, role);
    return result;
  }

  @Delete('gallery/:imageId')
  @Roles(UserRole.PET_PROVIDER)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async deleteImageGallery(
    @Param('imageId', ParseIntPipe) imageId: number,
    @UserId() userId: number,
  ) {
    const result = await this.storageService.deleteImageGallery(imageId, userId);
    return result;
  }
}
