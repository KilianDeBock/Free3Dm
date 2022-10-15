import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ArticleOrder {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
