import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesPetProvidersController } from './favorites-pet-providers.controller';

describe('FavoritesPetProvidersController', () => {
  let controller: FavoritesPetProvidersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritesPetProvidersController],
    }).compile();

    controller = module.get<FavoritesPetProvidersController>(FavoritesPetProvidersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
