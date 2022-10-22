import { Module } from '@nestjs/common';
import { ArticleOrderService } from './article_order.service';
import { ArticleOrderResolver } from './article_order.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleOrder } from './entities/article_order.entity';
import { ArticlesModule } from '../articles/articles.module';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleOrder]), ArticlesModule],
  providers: [ArticleOrderResolver, ArticleOrderService],
  exports: [ArticleOrderService],
})
export class ArticleOrderModule {}
