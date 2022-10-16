import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
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

  update(id: number, updateOrderInput: UpdateOrderInput): Promise<Order> {
    const oldOrder = this.orderRepository.findOneByOrFail({ id });
    const newOrder = { ...oldOrder, ...updateOrderInput };
    return this.orderRepository.save(newOrder);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.orderRepository.delete({ id });
  }
}
