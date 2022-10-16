import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateArticleInput {
  @Field(() => Float)
  price: number;

  @Field(() => Int)
  productId: number;
}
