import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Article } from 'src/articles/entities/article.entity';
import { ArticlesService } from '../articles/articles.service';
import { Brand } from '../brands/entities/brand.entity';
import { BrandsService } from 'src/brands/brands.service';
import { CategoriesService } from '../categories/categories.service';
import { Category } from '../categories/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @Inject(forwardRef(() => ArticlesService))
    private articlesService: ArticlesService,
    @Inject(forwardRef(() => BrandsService))
    private brandsService: BrandsService,
    @Inject(forwardRef(() => CategoriesService))
    private categoriesService: CategoriesService,
  ) {}

  create(createProductInput: CreateProductInput): Promise<Product> {
    const newProduct = this.productRepository.create(createProductInput);
    return this.productRepository.save(newProduct);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOneByOrFail({ id });
  }

  findAllByCustomerId(id: number): Promise<Product[]> {
    return this.productRepository.find({ where: { categoryId: id } });
  }

  findAllByBrandId(id: number): Promise<Product[]> {
    return this.productRepository.find({ where: { brandId: id } });
  }

  update(id: number, updateProductInput: UpdateProductInput): Promise<Product> {
    const oldProduct = this.productRepository.findOneByOrFail({ id });
    const newProduct = { ...oldProduct, ...updateProductInput };
    return this.productRepository.save(newProduct);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.productRepository.delete({ id });
  }

  // Gets: Functions that execute another entity's service function.
  getCategory(id: number): Promise<Category> {
    return this.categoriesService.findOne(id);
  }

  getBrand(id: number): Promise<Brand> {
    return this.brandsService.findOne(id);
  }

  getArticles(id: number): Promise<Article[]> {
    return this.articlesService.findAllByProductId(id);
  }
}
