import { Test, TestingModule } from '@nestjs/testing';
import { PetProvidersService } from './pet-providers.service';

describe('PetProvidersService', () => {
  let service: PetProvidersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetProvidersService],
    }).compile();

    service = module.get<PetProvidersService>(PetProvidersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
