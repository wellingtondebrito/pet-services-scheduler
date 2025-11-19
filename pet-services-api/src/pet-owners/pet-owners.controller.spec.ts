import { Test, TestingModule } from '@nestjs/testing';
import { PetOwnersController } from './pet-owners.controller';

describe('PetOwnersController', () => {
  let controller: PetOwnersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetOwnersController],
    }).compile();

    controller = module.get<PetOwnersController>(PetOwnersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
