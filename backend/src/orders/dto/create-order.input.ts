import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => Float)
  totalPrice: number;

  @Field(() => Int)
  addressId: number;

  @Field(() => Int)
  customerId: number;
}
