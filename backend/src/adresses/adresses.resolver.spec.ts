import { Test, TestingModule } from '@nestjs/testing';
import { AdressesResolver } from './adresses.resolver';
import { AdressesService } from './adresses.service';

describe('AdressesResolver', () => {
  let resolver: AdressesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdressesResolver, AdressesService],
    }).compile();

    resolver = module.get<AdressesResolver>(AdressesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
