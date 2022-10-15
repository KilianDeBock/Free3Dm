import { CreateArticleOrderInput } from './create-article_order.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateArticleOrderInput extends PartialType(CreateArticleOrderInput) {
  @Field(() => Int)
  id: number;
}
