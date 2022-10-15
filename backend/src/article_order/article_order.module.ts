import { Module } from '@nestjs/common';
import { ArticleOrderService } from './article_order.service';
import { ArticleOrderResolver } from './article_order.resolver';

@Module({
  providers: [ArticleOrderResolver, ArticleOrderService]
})
export class ArticleOrderModule {}
