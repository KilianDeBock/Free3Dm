import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateAddressInput {
  @Field(() => Int)
  id: number;

  @Field()
  country: string;

  @Field()
  city: string;

  @Field()
  postalCode: string;

  @Field()
  state: string;

  @Field()
  streetName: string;

  @Field()
  streetNumber: string;

  @Field(() => Int)
  customerId: number;
}
