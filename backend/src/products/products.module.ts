import { forwardRef, Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ArticlesModule } from '../articles/articles.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    forwardRef(() => ArticlesModule),
  ],
  providers: [ProductsResolver, ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
