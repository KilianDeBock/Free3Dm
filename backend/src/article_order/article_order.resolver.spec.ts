import { Test, TestingModule } from '@nestjs/testing';
import { ArticleOrderResolver } from './article_order.resolver';
import { ArticleOrderService } from './article_order.service';

describe('ArticleOrderResolver', () => {
  let resolver: ArticleOrderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleOrderResolver, ArticleOrderService],
    }).compile();

    resolver = module.get<ArticleOrderResolver>(ArticleOrderResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
