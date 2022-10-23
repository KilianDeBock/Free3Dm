import { forwardRef, Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesResolver } from './articles.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { ProductsModule } from '../products/products.module';
import { DetailsModule } from '../details/details.module';
import { ReviewsModule } from '../reviews/reviews.module';
import { ArticleOrderModule } from '../article_order/article_order.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Article]),
    forwardRef(() => ArticleOrderModule),
    forwardRef(() => ProductsModule),
    forwardRef(() => DetailsModule),
    forwardRef(() => ReviewsModule),
  ],
  providers: [ArticlesResolver, ArticlesService],
  exports: [ArticlesService],
})
export class ArticlesModule {}
