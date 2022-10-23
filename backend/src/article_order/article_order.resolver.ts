import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ArticleOrderService } from './article_order.service';
import { ArticleOrder } from './entities/article_order.entity';
import { CreateArticleOrderInput } from './dto/create-article_order.input';
import { UpdateArticleOrderInput } from './dto/update-article_order.input';
import { Article } from 'src/articles/entities/article.entity';
import { Order } from '../orders/entities/order.entity';

@Resolver(() => ArticleOrder)
export class ArticleOrderResolver {
  constructor(private readonly articleOrderService: ArticleOrderService) {}

  @Mutation(() => ArticleOrder)
  createArticleOrder(
    @Args('createArticleOrderInput')
    createArticleOrderInput: CreateArticleOrderInput,
  ) {
    return this.articleOrderService.create(createArticleOrderInput);
  }

  @Query(() => [ArticleOrder], { name: 'articleOrder' })
  findAll() {
    return this.articleOrderService.findAll();
  }

  @Query(() => ArticleOrder, { name: 'articleOrder' })
  findOne(
    @Args('orderId', { type: () => Int }) orderId: number,
    @Args('articleId', { type: () => Int }) articleId: number,
  ) {
    return this.articleOrderService.findOne(orderId, articleId);
  }

  @ResolveField(() => Article)
  article(@Parent() articleOrder: ArticleOrder): Promise<Article> {
    return this.articleOrderService.getArticle(articleOrder.articleId);
  }

  @ResolveField(() => Order)
  order(@Parent() articleOrder: ArticleOrder): Promise<Order> {
    return this.articleOrderService.getOrder(articleOrder.orderId);
  }

  @Mutation(() => ArticleOrder)
  updateArticleOrder(
    @Args('updateArticleOrderInput')
    updateArticleOrderInput: UpdateArticleOrderInput,
  ) {
    return this.articleOrderService.update(
      updateArticleOrderInput.orderId,
      updateArticleOrderInput.articleId,
      updateArticleOrderInput,
    );
  }

  @Mutation(() => ArticleOrder)
  removeArticleOrder(
    @Args('orderId', { type: () => Int }) orderId: number,
    @Args('articleId', { type: () => Int }) articleId: number,
  ) {
    return this.articleOrderService.remove(orderId, articleId);
  }
}
