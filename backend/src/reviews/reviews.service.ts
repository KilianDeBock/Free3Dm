import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { Article } from '../articles/entities/article.entity';
import { Customer } from '../customers/entities/customer.entity';
import { CustomersService } from '../customers/customers.service';
import { ArticlesService } from '../articles/articles.service';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review) private reviewRepository: Repository<Review>,
    @Inject(forwardRef(() => ArticlesService))
    private articlesService: ArticlesService,
    @Inject(forwardRef(() => CustomersService))
    private customersService: CustomersService,
  ) {}

  create(createReviewInput: CreateReviewInput): Promise<Review> {
    const newReview = this.reviewRepository.create(createReviewInput);
    return this.reviewRepository.save(newReview);
  }

  findAll(): Promise<Review[]> {
    return this.reviewRepository.find();
  }

  findAllByArticleId(id: number): Promise<Review[]> {
    return this.reviewRepository.find({ where: { articleId: id } });
  }

  findAllByCustomerId(id: number): Promise<Review[]> {
    return this.reviewRepository.find({ where: { customerId: id } });
  }

  findOne(id: number): Promise<Review> {
    return this.reviewRepository.findOneByOrFail({ id });
  }

  update(id: number, updateReviewInput: UpdateReviewInput): Promise<Review> {
    const oldReview = this.reviewRepository.findOneByOrFail({ id });
    const newReview = { ...oldReview, ...updateReviewInput };
    return this.reviewRepository.save(newReview);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.reviewRepository.delete({ id });
  }

  // Gets: Functions that execute another entity's service function.
  getArticle(id: number): Promise<Article> {
    return this.articlesService.findOne(id);
  }

  getCustomer(id: number): Promise<Customer> {
    return this.customersService.findOne(id);
  }
}
