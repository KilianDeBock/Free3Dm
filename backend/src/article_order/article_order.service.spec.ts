import { Test, TestingModule } from '@nestjs/testing';
import { ArticleOrderService } from './article_order.service';

describe('ArticleOrderService', () => {
  let service: ArticleOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleOrderService],
    }).compile();

    service = module.get<ArticleOrderService>(ArticleOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
