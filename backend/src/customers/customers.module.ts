import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { AddressesModule } from 'src/addresses/addresses.module';
import { OrdersModule } from '../orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]),
    AddressesModule,
    OrdersModule,
  ],
  providers: [CustomersResolver, CustomersService],
})
export class CustomersModule {}
