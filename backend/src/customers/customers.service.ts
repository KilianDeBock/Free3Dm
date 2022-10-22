import { Injectable } from '@nestjs/common';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { Address } from '../addresses/entities/address.entity';
import { AddressesService } from '../addresses/addresses.service';
import { Order } from '../orders/entities/order.entity';
import { OrdersService } from '../orders/orders.service';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    private addressesService: AddressesService,
    private ordersService: OrdersService,
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

  findAllAddresses(id: number): Promise<Address[]> {
    return this.addressesService.findAllByCustomerId(id);
  }

  findAllOrders(id: number): Promise<Order[]> {
    return this.ordersService.findAllByCustomerId(id);
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
