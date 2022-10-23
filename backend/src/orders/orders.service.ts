import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { ArticleOrderService } from '../article_order/article_order.service';
import { ArticleOrder } from '../article_order/entities/article_order.entity';
import { AddressesService } from '../addresses/addresses.service';
import { Address } from '../addresses/entities/address.entity';
import { CustomersService } from '../customers/customers.service';
import { Customer } from '../customers/entities/customer.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @Inject(forwardRef(() => ArticleOrderService))
    private articleOrderService: ArticleOrderService,
    @Inject(forwardRef(() => AddressesService))
    private addressesService: AddressesService,
    @Inject(forwardRef(() => CustomersService))
    private customersService: CustomersService,
  ) {}

  create(createOrderInput: CreateOrderInput): Promise<Order> {
    const newOrder = this.orderRepository.create(createOrderInput);
    return this.orderRepository.save(newOrder);
  }

  findAll(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  findOne(id: number): Promise<Order> {
    return this.orderRepository.findOneByOrFail({ id });
  }

  findAllByCustomerId(id: number): Promise<Order[]> {
    return this.orderRepository.find({ where: { customerId: id } });
  }

  findAllByAddressId(id: number): Promise<Order[]> {
    return this.orderRepository.find({ where: { addressId: id } });
  }

  update(id: number, updateOrderInput: UpdateOrderInput): Promise<Order> {
    const oldOrder = this.orderRepository.findOneByOrFail({ id });
    const newOrder = { ...oldOrder, ...updateOrderInput };
    return this.orderRepository.save(newOrder);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.orderRepository.delete({ id });
  }

  // Gets: Functions that execute another entity's service function.
  getAllArticles(id: number): Promise<ArticleOrder[]> {
    return this.articleOrderService.findAllByOrderId(id);
  }

  getAddress(id: number): Promise<Address> {
    return this.addressesService.findOne(id);
  }

  getCustomer(id: number): Promise<Customer> {
    return this.customersService.findOne(id);
  }
}
