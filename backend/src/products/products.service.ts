import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
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

  update(id: number, updateProductInput: UpdateProductInput): Promise<Product> {
    const oldProduct = this.productRepository.findOneByOrFail({ id });
    const newProduct = { ...oldProduct, ...updateProductInput };
    return this.productRepository.save(newProduct);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.productRepository.delete({ id });
  }
}
