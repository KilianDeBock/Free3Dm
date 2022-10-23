import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ReviewsService } from './reviews.service';
import { Review } from './entities/review.entity';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { Customer } from '../customers/entities/customer.entity';
import { Article } from 'src/articles/entities/article.entity';

@Resolver(() => Review)
export class ReviewsResolver {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Mutation(() => Review)
  createReview(
    @Args('createReviewInput') createReviewInput: CreateReviewInput,
  ) {
    return this.reviewsService.create(createReviewInput);
  }

  @Query(() => [Review], { name: 'reviews' })
  findAll() {
    return this.reviewsService.findAll();
  }

  @Query(() => Review, { name: 'review' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.reviewsService.findOne(id);
  }

  @ResolveField(() => Article)
  article(@Parent() review: Review): Promise<Article> {
    return this.reviewsService.getArticle(review.articleId);
  }

  @ResolveField(() => Customer)
  customer(@Parent() review: Review): Promise<Customer> {
    return this.reviewsService.getCustomer(review.customerId);
  }

  @Mutation(() => Review)
  updateReview(
    @Args('updateReviewInput') updateReviewInput: UpdateReviewInput,
  ) {
    return this.reviewsService.update(updateReviewInput.id, updateReviewInput);
  }

  @Mutation(() => Review)
  removeReview(@Args('id', { type: () => Int }) id: number) {
    return this.reviewsService.remove(id);
  }
}
