import { Module } from '@nestjs/common';
import { ArticleOrderService } from './article_order.service';
import { ArticleOrderResolver } from './article_order.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleOrder } from './entities/article_order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleOrder])],
  providers: [ArticleOrderResolver, ArticleOrderService],
})
export class ArticleOrderModule {}
