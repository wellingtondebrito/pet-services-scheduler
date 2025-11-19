import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesPetProvidersService } from './favorites-pet-providers.service';

describe('FavoritesPetProvidersService', () => {
  let service: FavoritesPetProvidersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritesPetProvidersService],
    }).compile();

    service = module.get<FavoritesPetProvidersService>(FavoritesPetProvidersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
