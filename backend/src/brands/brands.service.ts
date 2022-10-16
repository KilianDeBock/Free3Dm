import { Injectable } from '@nestjs/common';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand) private brandRepository: Repository<Brand>,
  ) {}

  create(createBrandInput: CreateBrandInput): Promise<Brand> {
    const newBrand = this.brandRepository.create(createBrandInput);
    return this.brandRepository.save(newBrand);
  }

  findAll(): Promise<Brand[]> {
    return this.brandRepository.find();
  }

  findOne(id: number): Promise<Brand> {
    return this.brandRepository.findOneByOrFail({ id });
  }

  update(id: number, updateBrandInput: UpdateBrandInput): Promise<Brand> {
    const oldBrand = this.brandRepository.findOneByOrFail({ id });
    const newBrand = { ...oldBrand, ...updateBrandInput };
    return this.brandRepository.save(newBrand);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.brandRepository.delete({ id });
  }
}
