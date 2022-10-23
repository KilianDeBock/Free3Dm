import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { Article } from './entities/article.entity';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { Review } from 'src/reviews/entities/review.entity';
import { Detail } from 'src/details/entities/detail.entity';
import { Product } from '../products/entities/product.entity';
import { ArticleOrder } from '../article_order/entities/article_order.entity';

@Resolver(() => Article)
export class ArticlesResolver {
  constructor(private readonly articlesService: ArticlesService) {}

  @Mutation(() => Article)
  createArticle(
    @Args('createArticleInput') createArticleInput: CreateArticleInput,
  ) {
    return this.articlesService.create(createArticleInput);
  }

  @Query(() => [Article], { name: 'articles' })
  findAll() {
    return this.articlesService.findAll();
  }

  @Query(() => Article, { name: 'article' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.articlesService.findOne(id);
  }

  @ResolveField(() => Product)
  product(@Parent() article: Article): Promise<Product> {
    return this.articlesService.getProduct(article.productId);
  }

  @ResolveField(() => [ArticleOrder])
  orders(@Parent() article: Article): Promise<ArticleOrder[]> {
    return this.articlesService.getAllOrders(article.id);
  }

  @ResolveField(() => [Detail])
  details(@Parent() article: Article): Promise<Detail[]> {
    return this.articlesService.getAllDetails(article.id);
  }

  @ResolveField(() => [Review])
  reviews(@Parent() article: Article): Promise<Review[]> {
    return this.articlesService.getAllReviews(article.id);
  }

  @Mutation(() => Article)
  updateArticle(
    @Args('updateArticleInput') updateArticleInput: UpdateArticleInput,
  ) {
    return this.articlesService.update(
      updateArticleInput.id,
      updateArticleInput,
    );
  }

  @Mutation(() => Article)
  removeArticle(@Args('id', { type: () => Int }) id: number) {
    return this.articlesService.remove(id);
  }
}
