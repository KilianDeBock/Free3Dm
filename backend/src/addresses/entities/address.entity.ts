import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer } from '../../customers/entities/customer.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity()
@ObjectType()
export class Address {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  country: string;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  postalCode: string;

  @Column()
  @Field()
  state: string;

  @Column()
  @Field()
  streetName: string;

  @Column()
  @Field()
  streetNumber: string;

  @Column()
  @Field(() => Int)
  customerId: number;

  @ManyToOne(() => Customer, (owner) => owner.addresses)
  @Field(() => Customer)
  customer: Customer;

  @OneToMany(() => Order, (order) => order.address)
  @Field(() => [Order], { nullable: true })
  orders?: Order[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
