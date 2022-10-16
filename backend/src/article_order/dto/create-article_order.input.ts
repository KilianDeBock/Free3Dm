import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateArticleOrderInput {
  @Field(() => Int)
  orderId: number;

  @Field(() => Int)
  articleId: number;

  @Field(() => Int)
  amount: number;
}
