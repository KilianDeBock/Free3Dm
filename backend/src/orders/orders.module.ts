import { forwardRef, Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { ArticleOrderModule } from '../article_order/article_order.module';
import { AddressesModule } from '../addresses/addresses.module';
import { CustomersModule } from 'src/customers/customers.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    forwardRef(() => ArticleOrderModule),
    forwardRef(() => AddressesModule),
    forwardRef(() => CustomersModule),
  ],
  providers: [OrdersResolver, OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
