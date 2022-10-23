import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CustomersService } from '../customers/customers.service';
import { Customer } from '../customers/entities/customer.entity';
import { Order } from '../orders/entities/order.entity';
import { OrdersService } from '../orders/orders.service';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
    @Inject(forwardRef(() => CustomersService))
    private customersService: CustomersService,
    @Inject(forwardRef(() => OrdersService))
    private ordersService: OrdersService,
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

  // Gets: Functions that execute another entity's service function.
  getCustomer(id: number): Promise<Customer> {
    return this.customersService.findOne(id);
  }

  getAllOrders(id: number): Promise<Order[]> {
    return this.ordersService.findAllByAddressId(id);
  }
}
