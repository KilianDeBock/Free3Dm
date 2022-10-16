import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateBrandInput {
  @Field()
  name: string;

  @Field(() => Int)
  contactNumber: number;

  @Field()
  btwNumber: string;
}
