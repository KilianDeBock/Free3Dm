import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    private productsService: ProductsService,
  ) {}

  create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    const newCategory = this.categoryRepository.create(createCategoryInput);
    return this.categoryRepository.save(newCategory);
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOneByOrFail({ id });
  }

  findAllProducts(id: number): Promise<Product[]> {
    return this.productsService.findAllByCustomerId(id);
  }

  update(
    id: number,
    updateCategoryInput: UpdateCategoryInput,
  ): Promise<Category> {
    const oldCategory = this.categoryRepository.findOneByOrFail({ id });
    const newCategory = { ...oldCategory, ...updateCategoryInput };
    return this.categoryRepository.save(newCategory);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.categoryRepository.delete({ id });
  }
}
