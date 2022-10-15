import { CreateAdressInput } from './create-adress.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAdressInput extends PartialType(CreateAdressInput) {
  @Field(() => Int)
  id: number;
}
