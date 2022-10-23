import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { DetailsService } from './details.service';
import { Detail } from './entities/detail.entity';
import { CreateDetailInput } from './dto/create-detail.input';
import { UpdateDetailInput } from './dto/update-detail.input';
import { Article } from '../articles/entities/article.entity';

@Resolver(() => Detail)
export class DetailsResolver {
  constructor(private readonly detailsService: DetailsService) {}

  @Mutation(() => Detail)
  createDetail(
    @Args('createDetailInput') createDetailInput: CreateDetailInput,
  ) {
    return this.detailsService.create(createDetailInput);
  }

  @Query(() => [Detail], { name: 'details' })
  findAll() {
    return this.detailsService.findAll();
  }

  @Query(() => Detail, { name: 'detail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.detailsService.findOne(id);
  }

  @ResolveField(() => Article)
  article(@Parent() detail: Detail): Promise<Article> {
    return this.detailsService.getArticle(detail.articleId);
  }

  @Mutation(() => Detail)
  updateDetail(
    @Args('updateDetailInput') updateDetailInput: UpdateDetailInput,
  ) {
    return this.detailsService.update(updateDetailInput.id, updateDetailInput);
  }

  @Mutation(() => Detail)
  removeDetail(@Args('id', { type: () => Int }) id: number) {
    return this.detailsService.remove(id);
  }
}
