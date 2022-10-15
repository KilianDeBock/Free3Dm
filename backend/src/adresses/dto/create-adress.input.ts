import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAdressInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
