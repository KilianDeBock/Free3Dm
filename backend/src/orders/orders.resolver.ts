import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { ArticleOrder } from '../article_order/entities/article_order.entity';
import { Address } from '../addresses/entities/address.entity';
import { Customer } from 'src/customers/entities/customer.entity';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Mutation(() => Order)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.ordersService.create(createOrderInput);
  }

  @Query(() => [Order], { name: 'orders' })
  findAll() {
    return this.ordersService.findAll();
  }

  @Query(() => Order, { name: 'order' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.findOne(id);
  }

  @ResolveField(() => Address)
  address(@Parent() order: Order): Promise<Address> {
    return this.ordersService.getAddress(order.addressId);
  }

  @ResolveField(() => Customer)
  customer(@Parent() order: Order): Promise<Customer> {
    return this.ordersService.getCustomer(order.customerId);
  }

  @ResolveField(() => [ArticleOrder])
  articles(@Parent() order: Order): Promise<ArticleOrder[]> {
    return this.ordersService.getAllArticles(order.id);
  }

  @Mutation(() => Order)
  updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.ordersService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation(() => Order)
  removeOrder(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.remove(id);
  }
}
