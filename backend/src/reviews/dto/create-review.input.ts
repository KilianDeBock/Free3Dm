import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateReviewInput {
  @Field(() => Int)
  stars: number;

  @Field()
  title: string;

  @Field()
  review: string;

  @Field(() => Int)
  articleId: number;

  @Field(() => Int)
  customerId: number;
}
