import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Address } from '../../addresses/entities/address.entity';
import { ArticleOrder } from '../../article_order/entities/article_order.entity';
import { Customer } from '../../customers/entities/customer.entity';

@Entity()
@ObjectType()
export class Order {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Float)
  totalPrice: number;

  @Column()
  @Field(() => Int)
  addressId: number;

  @ManyToOne(() => Address, (address) => address.orders)
  @Field(() => Address)
  address: Address;

  @Column()
  @Field(() => Int)
  customerId: number;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  @Field(() => Customer)
  customer: Customer;

  @OneToMany(() => ArticleOrder, (articleOder) => articleOder.order)
  @Field(() => [ArticleOrder], { nullable: true })
  articles?: ArticleOrder[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
