import { Injectable } from '@nestjs/common';
import { CreateDetailInput } from './dto/create-detail.input';
import { UpdateDetailInput } from './dto/update-detail.input';

@Injectable()
export class DetailsService {
  create(createDetailInput: CreateDetailInput) {
    return 'This action adds a new detail';
  }

  findAll() {
    return `This action returns all details`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detail`;
  }

  update(id: number, updateDetailInput: UpdateDetailInput) {
    return `This action updates a #${id} detail`;
  }

  remove(id: number) {
    return `This action removes a #${id} detail`;
  }
}
