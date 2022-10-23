import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { Address } from '../addresses/entities/address.entity';
import { AddressesService } from '../addresses/addresses.service';
import { Order } from '../orders/entities/order.entity';
import { OrdersService } from '../orders/orders.service';
import { Review } from '../reviews/entities/review.entity';
import { ReviewsService } from '../reviews/reviews.service';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    @Inject(forwardRef(() => AddressesService))
    private addressesService: AddressesService,
    @Inject(forwardRef(() => OrdersService))
    private ordersService: OrdersService,
    @Inject(forwardRef(() => ReviewsService))
    private reviewsService: ReviewsService,
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

  // Gets: Functions that execute another entity's service function.
  getAllAddresses(id: number): Promise<Address[]> {
    return this.addressesService.findAllByCustomerId(id);
  }

  getAllOrders(id: number): Promise<Order[]> {
    return this.ordersService.findAllByCustomerId(id);
  }

  getAllReviews(id: number): Promise<Review[]> {
    return this.reviewsService.findAllByCustomerId(id);
  }
}
