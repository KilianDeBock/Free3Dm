import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity()
@ObjectType()
export class Brand {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field(() => Int)
  contactNumber: number;

  @Column()
  @Field()
  btwNumber: string;

  @OneToMany(() => Product, (product) => product.brand)
  @Field(() => [Product], { nullable: true })
  products?: Product[];
}
