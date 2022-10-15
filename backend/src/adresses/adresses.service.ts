import { Injectable } from '@nestjs/common';
import { CreateAdressInput } from './dto/create-adress.input';
import { UpdateAdressInput } from './dto/update-adress.input';

@Injectable()
export class AdressesService {
  create(createAdressInput: CreateAdressInput) {
    return 'This action adds a new adress';
  }

  findAll() {
    return `This action returns all adresses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adress`;
  }

  update(id: number, updateAdressInput: UpdateAdressInput) {
    return `This action updates a #${id} adress`;
  }

  remove(id: number) {
    return `This action removes a #${id} adress`;
  }
}
