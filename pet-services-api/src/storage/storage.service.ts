import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { UploadDto } from './dto/uploadDto';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { v4 as uuid } from 'uuid';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRole } from '@prisma/client';
import { UpdateImageDto } from './dto/update-image.dto';

@Injectable()
export class StorageService {
  private supabaseCliente: SupabaseClient;
  private readonly bucketName: string = 'avatars';
  private readonly galleryBucketName: string = 'gallery';
  // Use o Logger do Nest em vez de console.log para logs estruturados e níveis
  private readonly logger = new Logger(StorageService.name);

  constructor(
    private configService: ConfigService,
    private prismaService: PrismaService,
  ) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_KEY');
    if (!supabaseUrl || !supabaseKey) {
      throw new Error(
        'SUPABASE_URL and SUPABASE_KEY must be set in the environment',
      );
    }
    this.supabaseCliente = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    });
  }

  /**
   * Utilitário: Extrai o caminho do storage a partir de uma URL pública do Supabase.
   * Exemplo de URL pública: https://xyz.supabase.co/storage/v1/object/public/<bucket>/path/to/file.jpg
   * Retorna `path/to/file.jpg` (a parte após `/public/<bucket>/`).
   * Retorna null quando a URL não é válida ou não contém o padrão esperado.
   */
  private getPathFromPublicUrl(url: string, bucket: string): string | null {
    try {
      const pathname = new URL(url).pathname; // /storage/v1/object/public/<bucket>/<path>
      const marker = `/public/${bucket}/`;
      const idx = pathname.indexOf(marker);
      if (idx === -1) return null;
      return pathname.substring(idx + marker.length);
    } catch (err) {
      // URL malformada
      return null;
    }
  }
  async saveFileAvatar(file: UploadDto, userId: number, role: UserRole) {
    const fileExtension = file.originalname.split('.').pop();
    const uniqueFileName = `${uuid()}.${fileExtension}`;

    const { data, error } = await this.supabaseCliente.storage
      .from(this.bucketName)
      .upload(`avatars/${uniqueFileName}`, file.buffer, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.mimetype,
      });

    if (error) {
      throw new Error(`Error uploading file: ${error.message}`);
    }

    const finalUrl = `${this.configService.get('SUPABASE_URL')}/storage/v1/object/public/${this.bucketName}/${data.path}`;

    let updatedUser;

    if (role === UserRole.PET_OWNER) {
      // Vincula ao PetOwner através do userId -> encontra o PetOwner e atualiza pelo id do profile
      const owner = await this.prismaService.petOwner.findUnique({
        where: { userId },
      });
      if (!owner) {
        throw new NotFoundException(
          'PetOwner profile not found for current user',
        );
      }
      updatedUser = await this.prismaService.petOwner.update({
        where: { id: owner.id },
        data: { avatarUrl: finalUrl },
      });
    } else if (role === UserRole.PET_PROVIDER) {
      // Vincula ao PetProvider através do userId -> encontra o PetProvider e atualiza pelo id do profile
      const provider = await this.prismaService.petProvider.findUnique({
        where: { userId },
      });
      if (!provider) {
        throw new NotFoundException(
          'PetProvider profile not found for current user',
        );
      }
      updatedUser = await this.prismaService.petProvider.update({
        where: { id: provider.id },
        data: { avatarUrl: finalUrl },
      });
    }

    return {
      message: 'Avatar atualizado com sucesso!',
      url: finalUrl,
      user: updatedUser,
    };
  }

  async uploadGalleryImages(files: Array<UploadDto>, userId: number) {
    let petProvider = await this.prismaService.petProvider.findUnique({
      where: { userId: userId },
      select: { id: true },
    });

    if (!petProvider) {
      throw new NotFoundException('PetProvider not found');
    }

    const actualProviderId = petProvider.id;
    // Para evitar saturar memória/IO quando muitos arquivos são enviados,
    // limitar a concorrência enviando em lotes.
    // Escolha uma concorrência razoável (5 por padrão).
    const CONCURRENCY = 5;
    const uploadedResults: Array<any> = [];

    for (let i = 0; i < files.length; i += CONCURRENCY) {
      const batch = files.slice(i, i + CONCURRENCY);
      const batchPromises = batch.map((file) => {
        const fileExtension = file.originalname.split('.').pop();
        const uniqueFileName = `${uuid()}.${fileExtension}`;
        const path = `gallery/${actualProviderId}/${uniqueFileName}`;

        return this.supabaseCliente.storage
          .from(this.galleryBucketName)
          .upload(path, file.buffer, {
            cacheControl: '3600',
            upsert: false,
            contentType: file.mimetype,
          });
      });

      const results = await Promise.all(batchPromises);
      uploadedResults.push(...results);
    }

    const successfulUploads = uploadedResults.filter((result) => !result.error);
    if (successfulUploads.length !== files.length) {
      // Se alguns uploads falharam, tente limpar quaisquer arquivos já enviados neste lote
      const uploadedPaths = successfulUploads
        .map((r) => r.data?.path)
        .filter(Boolean);
      if (uploadedPaths.length) {
        try {
          await this.supabaseCliente.storage
            .from(this.galleryBucketName)
            .remove(uploadedPaths);
        } catch (cleanupErr) {
          this.logger.warn('Falha ao limpar uploads parciais', cleanupErr as any);
        }
      }

      throw new Error('Some files failed to upload to the gallery.');
    }

    const dbData = successfulUploads.map((result) => {
      const path = result.data?.path || '';
      const url = `${this.configService.get('SUPABASE_URL')}/storage/v1/object/public/${this.galleryBucketName}/${path}`;

      return {
        providerId: actualProviderId,
        url: url,
      };
    });

    // Inserir metadados no DB. Se a escrita no DB falhar, remover os arquivos enviados (ação compensatória)
    try {
      const createdImages = await this.prismaService.providerImage.createMany({
        data: dbData,
      });

      return {
        count: createdImages.count,
        data: dbData.map((item) => item.url),
        providerId: actualProviderId,
      };
    } catch (dbErr) {
      // Tenta remover os arquivos enviados para evitar arquivos órfãos no storage
      const uploadedPaths = successfulUploads.map((r) => r.data?.path).filter(Boolean);
      if (uploadedPaths.length) {
        try {
          await this.supabaseCliente.storage
            .from(this.galleryBucketName)
            .remove(uploadedPaths as string[]);
        } catch (cleanupErr) {
          this.logger.error('Falha ao limpar arquivos enviados após erro no DB', cleanupErr as any);
        }
      }
      throw dbErr;
    }
  }

  async updateImageMetadata(
    imageId: number,
    updateDto: UpdateImageDto,
    providerId: number,
  ) {
    const existImage = await this.prismaService.providerImage.findUnique({
      where: { id: imageId },
    });
    if (!existImage) {
      throw new NotFoundException('Image not found');
    }

    const petProvider = await this.prismaService.petProvider.findUnique({
      where: { userId: providerId },
      select: { id: true },
    });

    if (!petProvider) {
      throw new NotFoundException('PetProvider not found');
    }

    const actualProviderId = petProvider.id;

    if (existImage.providerId !== actualProviderId) {
      throw new ForbiddenException('Você não tem permissão para atualizar esta imagem');
    }

    const updatedImage = await this.prismaService.providerImage.update({
      where: { id: imageId },
      data: updateDto,
    });

    return updatedImage;
  }

  async findImagesByProviderId(providerId: number) {
    this.logger.debug(`findImagesByProviderId providerId=${providerId}`);

    let existId = await this.prismaService.petProvider.findUnique({
      where: { id: providerId },
    });

    this.logger.debug(`petProvider found=${Boolean(existId)}`);

    if (!existId) {
      throw new NotFoundException('PetProvider not found');
    }

    const images = await this.prismaService.providerImage.findMany({
      where: { providerId: providerId },
    });

    return images;
  }

  async findAvatarUrlById(userId: number, role: UserRole) {
    let avatarUrl;
    this.logger.debug(`findAvatarUrlById userId=${userId} role=${role}`);

    if (role === UserRole.PET_OWNER) {
      const petOwner = await this.prismaService.petOwner.findUnique({
        where: { userId: userId },
        select: {
          id: true,
          avatarUrl: true,
        },
      });
      if (!petOwner) {
        throw new NotFoundException('PetOwner not found');
      }
      avatarUrl = petOwner;
    } else if (role === UserRole.PET_PROVIDER) {
      const petProvider = await this.prismaService.petProvider.findUnique({
        where: { userId: userId },
        select: {
          id: true,
          avatarUrl: true,
        },
      });

      if (!petProvider) {
        throw new NotFoundException('PetProvider not found');
      }
      avatarUrl = petProvider;
    }

    return avatarUrl;
  }

  async deleteAvatar(userId: number, role: UserRole) {
    if (role === UserRole.PET_OWNER) {
      const petOwner = await this.prismaService.petOwner.findUnique({
        where: { userId: userId },
        select: { avatarUrl: true, id: true },
      });

      if (!petOwner) {
        throw new NotFoundException(
          'PetOwner profile not found for current user',
        );
      }

      // Se não há avatar, retorna sucesso
      if (!petOwner.avatarUrl) {
        return { message: 'No avatar to delete' };
      }

      // Extrai apenas o caminho relativo da URL usando utilitário seguro
      const avatarPath = this.getPathFromPublicUrl(petOwner.avatarUrl, this.bucketName);
      if (!avatarPath) {
        this.logger.warn('deleteAvatar: could not extract path from avatarUrl', petOwner.avatarUrl);
        throw new Error('Invalid avatar URL');
      }

      const { error } = await this.supabaseCliente.storage
        .from(this.bucketName)
        .remove([avatarPath]); // remove() espera um array de caminhos

      if (error) {
        throw new Error(`Error deleting avatar: ${error.message}`);
      }

      await this.prismaService.petOwner.update({
        where: { id: petOwner.id },
        data: { avatarUrl: null },
      });

      return { message: 'Avatar deleted successfully' };
    } else if (role === UserRole.PET_PROVIDER) {
      const petProvider = await this.prismaService.petProvider.findUnique({
        where: { userId: userId },
        select: { avatarUrl: true, id: true },
      });

      if (!petProvider) {
        throw new NotFoundException(
          'PetProvider profile not found for current user',
        );
      }

      if (!petProvider.avatarUrl) {
        return { message: 'No avatar to delete' };
      }

      const avatarPath = this.getPathFromPublicUrl(petProvider.avatarUrl, this.bucketName);
      if (!avatarPath) {
        this.logger.warn('deleteAvatar: could not extract path from avatarUrl', petProvider.avatarUrl);
        throw new Error('Invalid avatar URL');
      }

      const { error } = await this.supabaseCliente.storage
        .from(this.bucketName)
        .remove([avatarPath]);

      if (error) {
        throw new Error(`Error deleting avatar: ${error.message}`);
      }

      await this.prismaService.petProvider.update({
        where: { id: petProvider.id },
        data: { avatarUrl: null },
      });

      return { message: 'Avatar deleted successfully' };
    }
  }

  async deleteImageGallery(
    imageId: number,
    providerId: number,
  ) {
    
    const existImage = await this.prismaService.providerImage.findUnique({
      where: { id: imageId },
    });
    if (!existImage) {
      throw new NotFoundException('Image not found');
    }

    const petProvider = await this.prismaService.petProvider.findUnique({
      where: { userId: providerId },
      select: { id: true },
    });

    if (!petProvider) {
      throw new NotFoundException('PetProvider not found');
    }

    const actualProviderId = petProvider.id;

    if (existImage.providerId !== actualProviderId) {
      throw new ForbiddenException('You are not allowed to update this image');
    }

    // Extrai o caminho usando o utilitário para ser resiliente a variações no formato da URL
    const avatarPath = this.getPathFromPublicUrl(existImage.url, this.galleryBucketName);
    if (!avatarPath) {
      this.logger.warn('deleteImageGallery: não foi possível extrair o caminho da URL da imagem', existImage.url);
      throw new Error('URL de imagem inválida');
    }

    this.logger.debug({ providerId, imageId, avatarPath, actualProviderId, imageUrl: existImage.url } as any);

    const { error } = await this.supabaseCliente.storage
      .from(this.galleryBucketName)
      .remove([avatarPath]);

      if (error) {
        throw new Error(`Error deleting avatar: ${error.message}`);
      }

    await this.prismaService.providerImage.delete({
      where: { id: imageId },
    });

    return { message: 'Image deleted successfully' };
  }
}
