import { forwardRef, Module } from '@nestjs/common';
import { ArticleOrderService } from './article_order.service';
import { ArticleOrderResolver } from './article_order.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleOrder } from './entities/article_order.entity';
import { ArticlesModule } from '../articles/articles.module';
import { OrdersModule } from '../orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ArticleOrder]),
    forwardRef(() => ArticlesModule),
    forwardRef(() => OrdersModule),
  ],
  providers: [ArticleOrderResolver, ArticleOrderService],
  exports: [ArticleOrderService],
})
export class ArticleOrderModule {}
