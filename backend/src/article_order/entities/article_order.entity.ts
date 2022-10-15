import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';
import { Article } from '../../articles/entities/article.entity';

@Entity()
@ObjectType()
export class ArticleOrder {
  @PrimaryColumn()
  @Field(() => Int)
  orderId: number;

  @ManyToOne(() => Order, (order) => order.articles)
  @Field(() => Order)
  order: Order;

  @PrimaryColumn()
  @Field(() => Int)
  articleId: number;

  @ManyToOne(() => Article, (article) => article.orders)
  @Field(() => Article)
  article: Article;

  @Column()
  @Field(() => Int)
  amount: number;
}
