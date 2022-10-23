import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Article } from 'src/articles/entities/article.entity';
import { ArticlesService } from '../articles/articles.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @Inject(forwardRef(() => ArticlesService))
    private articlesService: ArticlesService,
  ) {}

  create(createProductInput: CreateProductInput): Promise<Product> {
    const newProduct = this.productRepository.create(createProductInput);
    return this.productRepository.save(newProduct);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findAllByCustomerId(id: number): Promise<Product[]> {
    return this.productRepository.find({ where: { categoryId: id } });
  }

  getArticles(id: number): Promise<Article[]> {
    return this.articlesService.findAllByProductId(id);
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOneByOrFail({ id });
  }

  update(id: number, updateProductInput: UpdateProductInput): Promise<Product> {
    const oldProduct = this.productRepository.findOneByOrFail({ id });
    const newProduct = { ...oldProduct, ...updateProductInput };
    return this.productRepository.save(newProduct);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.productRepository.delete({ id });
  }
}
