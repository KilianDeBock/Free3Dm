import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Address } from '../../addresses/entities/address.entity';
import { Review } from '../../reviews/entities/review.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity()
@ObjectType()
export class Customer {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  firstName: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  lastName: string;

  @Column({ type: 'timestamp' })
  @Field(() => Date)
  birthDate: Date;

  @OneToMany(() => Address, (address) => address.customer)
  @Field(() => [Address], { nullable: true })
  addresses?: Address[];

  @OneToMany(() => Order, (order) => order.customer)
  @Field(() => [Order], { nullable: true })
  orders?: Order[];

  @OneToMany(() => Review, (review) => review.customer)
  @Field(() => [Review], { nullable: true })
  reviews?: Review[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
