import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  categoryId?: number;
}
