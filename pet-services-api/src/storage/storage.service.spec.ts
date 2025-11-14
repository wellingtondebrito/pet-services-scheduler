// Mock 'uuid' before loading modules that import it to avoid ESM parse errors in Jest
jest.mock('uuid', () => ({ v4: () => 'fixed-uuid' }));
// Mock path alias imports used by the service so Jest can load modules under rootDir
jest.mock('src/prisma/prisma.service', () => ({ PrismaService: jest.fn().mockImplementation(() => ({})) }));

import { NotFoundException, ForbiddenException } from '@nestjs/common';
import { StorageService } from './storage.service';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRole } from '@prisma/client';

describe('StorageService', () => {
  let service: StorageService;
  let mockConfig: Partial<ConfigService>;
  let mockPrisma: any;

  beforeEach(() => {
    mockConfig = {
      get: jest.fn((key: string) => {
        if (key === 'SUPABASE_URL') return 'https://supabase.test';
        if (key === 'SUPABASE_KEY') return 'key';
        return null;
      }),
    };

    mockPrisma = {
      petOwner: {
        findUnique: jest.fn(),
        update: jest.fn(),
      },
      petProvider: {
        findUnique: jest.fn(),
        update: jest.fn(),
      },
      providerImage: {
        createMany: jest.fn(),
        findUnique: jest.fn(),
        delete: jest.fn(),
        findMany: jest.fn(),
      },
    };

    service = new StorageService(mockConfig as any, mockPrisma as PrismaService);

    // Replace supabase client with a controllable mock that reuses the same
    // upload/remove functions for the bucket so tests can spy on them.
    const bucketFns: any = {
      upload: jest.fn(async (path: string) => ({ data: { path }, error: null })),
      remove: jest.fn(async (paths: string[]) => ({ data: null, error: null })),
    };

    const supabaseMock: any = {
      storage: {
        from: jest.fn(() => bucketFns),
      },
    };

    // @ts-ignore override private
    service['supabaseCliente'] = supabaseMock;
  });

  it('saveFileAvatar - should upload and update pet owner avatar', async () => {
    const file: any = { originalname: 'a.png', buffer: Buffer.from('x'), mimetype: 'image/png' };
    mockPrisma.petOwner.findUnique.mockResolvedValue({ id: 1 });
    mockPrisma.petOwner.update.mockResolvedValue({ id: 1, avatarUrl: 'https://supabase.test/storage/v1/object/public/avatars/avatars/uuid.png' });

    const res = await service.saveFileAvatar(file, 1, UserRole.PET_OWNER);

    expect(res).toHaveProperty('message');
    expect(res).toHaveProperty('url');
    expect(mockPrisma.petOwner.update).toHaveBeenCalled();
  });

  it('uploadGalleryImages - success and createMany called', async () => {
    const files = [
      { originalname: '1.jpg', buffer: Buffer.from('1'), mimetype: 'image/jpeg' },
      { originalname: '2.jpg', buffer: Buffer.from('2'), mimetype: 'image/jpeg' },
    ];
    mockPrisma.petProvider.findUnique.mockResolvedValue({ id: 2 });
    mockPrisma.providerImage.createMany.mockResolvedValue({ count: 2 });

    const res = await service.uploadGalleryImages(files as any, 10);

    expect(res.count).toBe(2);
    expect(mockPrisma.providerImage.createMany).toHaveBeenCalled();
  });

  it('uploadGalleryImages - DB failure triggers cleanup', async () => {
    const files = [
      { originalname: '1.jpg', buffer: Buffer.from('1'), mimetype: 'image/jpeg' },
    ];
    mockPrisma.petProvider.findUnique.mockResolvedValue({ id: 3 });
    mockPrisma.providerImage.createMany.mockRejectedValue(new Error('DB fail'));

    // spy on remove
    const fromSpy = (service as any).supabaseCliente.storage.from('gallery');
    const removeSpy = fromSpy.remove as jest.Mock;

    await expect(service.uploadGalleryImages(files as any, 11)).rejects.toThrow('DB fail');
    expect(removeSpy).toHaveBeenCalled();
  });

  it('updateImageMetadata - forbidden if not owner', async () => {
    mockPrisma.providerImage.findUnique.mockResolvedValue({ id: 5, providerId: 50 });
    mockPrisma.petProvider.findUnique.mockResolvedValue({ id: 2 });

    await expect(service.updateImageMetadata(5, { title: 'x' } as any, 999)).rejects.toThrow(ForbiddenException);
  });

  it('findImagesByProviderId - not found throws', async () => {
    mockPrisma.petProvider.findUnique.mockResolvedValue(null);
    await expect(service.findImagesByProviderId(123)).rejects.toThrow(NotFoundException);
  });

  it('findAvatarUrlById - returns pet owner avatar', async () => {
    mockPrisma.petOwner.findUnique.mockResolvedValue({ id: 1, avatarUrl: 'u' });
    const res = await service.findAvatarUrlById(1, UserRole.PET_OWNER);
    expect(res).toHaveProperty('avatarUrl');
  });

  it('deleteAvatar - no avatar returns message', async () => {
    mockPrisma.petOwner.findUnique.mockResolvedValue({ id: 1, avatarUrl: null });
    const res = await service.deleteAvatar(1, UserRole.PET_OWNER);
    expect(res).toEqual({ message: 'No avatar to delete' });
  });

  it('deleteImageGallery - forbidden when not owner', async () => {
    mockPrisma.providerImage.findUnique.mockResolvedValue({ id: 9, providerId: 7, url: 'https://supabase.test/storage/v1/object/public/gallery/7/file.jpg' });
    mockPrisma.petProvider.findUnique.mockResolvedValue({ id: 2 });
    await expect(service.deleteImageGallery(9, 999)).rejects.toThrow(ForbiddenException);
  });
});
