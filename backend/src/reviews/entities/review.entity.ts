import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Article } from '../../articles/entities/article.entity';
import { Customer } from '../../customers/entities/customer.entity';

@Entity()
@ObjectType()
export class Review {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Int)
  stars: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  review: string;

  @PrimaryColumn()
  @Field(() => Int)
  articleId: number;

  @ManyToOne(() => Article, (article) => article.reviews)
  @Field(() => Article)
  article: Article;

  @PrimaryColumn()
  @Field(() => Int)
  customerId: number;

  @ManyToOne(() => Customer, (customer) => customer.reviews)
  @Field(() => Customer)
  customer: Customer;
}
