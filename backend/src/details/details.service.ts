import { Injectable } from '@nestjs/common';
import { CreateDetailInput } from './dto/create-detail.input';
import { UpdateDetailInput } from './dto/update-detail.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Detail } from './entities/detail.entity';

@Injectable()
export class DetailsService {
  constructor(
    @InjectRepository(Detail) private detailRepository: Repository<Detail>,
  ) {}

  create(createDetailInput: CreateDetailInput): Promise<Detail> {
    const newDetail = this.detailRepository.create(createDetailInput);
    return this.detailRepository.save(newDetail);
  }

  findAll(): Promise<Detail[]> {
    return this.detailRepository.find();
  }

  findOne(id: number): Promise<Detail> {
    return this.detailRepository.findOneByOrFail({ id });
  }

  update(id: number, updateDetailInput: UpdateDetailInput): Promise<Detail> {
    const oldDetail = this.detailRepository.findOneByOrFail({ id });
    const newDetail = { ...oldDetail, ...updateDetailInput };
    return this.detailRepository.save(newDetail);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.detailRepository.delete({ id });
  }
}
