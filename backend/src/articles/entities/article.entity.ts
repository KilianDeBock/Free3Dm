import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { ArticleOrder } from '../../article_order/entities/article_order.entity';
import { Detail } from '../../details/entities/detail.entity';
import { Review } from '../../reviews/entities/review.entity';

@Entity()
@ObjectType()
export class Article {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Float)
  price: number;

  @Column()
  @Field(() => Int)
  productId: number;

  @ManyToOne(() => Product, (product) => product.articles)
  @Field(() => Product)
  product: Product;

  @OneToMany(() => ArticleOrder, (articleOder) => articleOder.article)
  @Field(() => [ArticleOrder], { nullable: true })
  orders?: ArticleOrder[];

  @OneToMany(() => Detail, (detail) => detail.article)
  @Field(() => [Detail], { nullable: true })
  details?: Detail[];

  @OneToMany(() => Review, (detail) => detail.article)
  @Field(() => [Review], { nullable: true })
  reviews?: Review[];
}
