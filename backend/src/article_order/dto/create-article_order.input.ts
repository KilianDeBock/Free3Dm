import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateArticleOrderInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
