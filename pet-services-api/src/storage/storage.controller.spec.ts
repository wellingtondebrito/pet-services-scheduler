// Mock 'uuid' before loading modules that import it to avoid ESM parse errors in Jest
jest.mock('uuid', () => ({ v4: () => 'fixed-uuid' }));

// Mock PrismaService path alias so controller/service imports resolve in Jest
jest.mock('src/prisma/prisma.service', () => ({ PrismaService: jest.fn().mockImplementation(() => ({})) }));

import { Test, TestingModule } from '@nestjs/testing';
import { StorageController } from './storage.controller';
import { StorageService } from './storage.service';

describe('StorageController', () => {
  let controller: StorageController;
  const mockService = {
    saveFileAvatar: jest.fn(),
    uploadGalleryImages: jest.fn(),
    updateImageMetadata: jest.fn(),
    findImagesByProviderId: jest.fn(),
    findAvatarUrlById: jest.fn(),
    deleteAvatar: jest.fn(),
    deleteImageGallery: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorageController],
      providers: [{ provide: StorageService, useValue: mockService }],
    }).compile();

    controller = module.get<StorageController>(StorageController);
  });

  it('should call saveFileAvatar', async () => {
    mockService.saveFileAvatar.mockResolvedValue({ ok: true });
    const res = await controller.uploadFile({} as any, 1, 'PET_OWNER' as any);
    expect(mockService.saveFileAvatar).toHaveBeenCalled();
  });

  it('should call uploadGalleryImages', async () => {
    mockService.uploadGalleryImages.mockResolvedValue({ count: 0 });
    const res = await controller.uploadFiles([], 1);
    expect(mockService.uploadGalleryImages).toHaveBeenCalled();
  });

  it('should call findImagesByProviderId', async () => {
    mockService.findImagesByProviderId.mockResolvedValue([]);
    const res = await controller.findImagesByProviderId(3 as any);
    expect(mockService.findImagesByProviderId).toHaveBeenCalledWith(3);
  });
});
