import { forwardRef, Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { AddressesModule } from 'src/addresses/addresses.module';
import { OrdersModule } from '../orders/orders.module';
import { ReviewsModule } from 'src/reviews/reviews.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]),
    forwardRef(() => AddressesModule),
    forwardRef(() => OrdersModule),
    forwardRef(() => ReviewsModule),
  ],
  providers: [CustomersResolver, CustomersService],
  exports: [CustomersService],
})
export class CustomersModule {}
