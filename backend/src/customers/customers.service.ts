import { Injectable } from '@nestjs/common';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  create(createCustomerInput: CreateCustomerInput): Promise<Customer> {
    const newCustomer = this.customerRepository.create(createCustomerInput);
    return this.customerRepository.save(newCustomer);
  }

  findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  findOne(id: number): Promise<Customer> {
    return this.customerRepository.findOneByOrFail({ id });
  }

  update(
    id: number,
    updateCustomerInput: UpdateCustomerInput,
  ): Promise<Customer> {
    const oldCustomer = this.customerRepository.findOneByOrFail({ id });
    const newCustomer = { ...oldCustomer, ...updateCustomerInput };
    return this.customerRepository.save(newCustomer);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.customerRepository.delete({ id });
  }
}
