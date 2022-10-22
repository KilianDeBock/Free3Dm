import { Injectable } from '@nestjs/common';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address) private addressRepository: Repository<Address>,
  ) {}

  create(createAddressInput: CreateAddressInput): Promise<Address> {
    const newAddress = this.addressRepository.create(createAddressInput);
    return this.addressRepository.save(newAddress);
  }

  findAll(): Promise<Address[]> {
    return this.addressRepository.find();
  }

  findAllByCustomerId(id: number): Promise<Address[]> {
    return this.addressRepository.find({ where: { customerId: id } });
  }

  findOne(id: number): Promise<Address> {
    return this.addressRepository.findOneByOrFail({ id });
  }

  update(id: number, updateAddressInput: UpdateAddressInput): Promise<Address> {
    const oldAddress = this.addressRepository.findOneByOrFail({ id });
    const newAddress = { ...oldAddress, ...updateAddressInput };
    return this.addressRepository.save(newAddress);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.addressRepository.delete({ id });
  }
}
