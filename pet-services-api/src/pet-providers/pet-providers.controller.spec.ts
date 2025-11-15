import { Test, TestingModule } from '@nestjs/testing';
import { PetProvidersController } from './pet-providers.controller';

describe('PetProvidersController', () => {
  let controller: PetProvidersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetProvidersController],
    }).compile();

    controller = module.get<PetProvidersController>(PetProvidersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
