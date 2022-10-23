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
import { Product } from '../../products/entities/product.entity';

@Entity()
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  categoryId?: number;

  @ManyToOne(() => Category, (category) => category.categories)
  @Field(() => Category, { nullable: true })
  category?: Category;

  @OneToMany(() => Category, (category) => category.categories)
  @Field(() => [Category], { nullable: true })
  categories?: Category[];

  @OneToMany(() => Product, (product) => product.category)
  @Field(() => [Product], { nullable: true })
  products?: Product[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
