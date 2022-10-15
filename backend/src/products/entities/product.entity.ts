import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Article } from '../../articles/entities/article.entity';
import { Category } from '../../categories/entities/category.entity';
import { Brand } from '../../brands/entities/brand.entity';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Int)
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.products)
  @Field(() => Category)
  category: Category;

  @Column()
  @Field(() => Int)
  brandId: number;

  @ManyToOne(() => Brand, (brand) => brand.products)
  @Field(() => Brand)
  brand: Brand;

  @OneToMany(() => Article, (article) => article.product)
  @Field(() => [Article], { nullable: true })
  articles?: Article[];
}
