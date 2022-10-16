import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => Int)
  categoryId: number;

  @Field(() => Int)
  brandId: number;
}
