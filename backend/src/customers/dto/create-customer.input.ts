import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field(() => Date)
  birthDate: Date;
}
