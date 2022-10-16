import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateDetailInput {
  @Field()
  key: string;

  @Field()
  value: string;

  @Field(() => Int)
  articleId: number;
}
