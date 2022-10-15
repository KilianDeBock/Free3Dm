import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDetailInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
