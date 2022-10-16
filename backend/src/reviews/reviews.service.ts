import { Injectable } from '@nestjs/common';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review) private reviewRepository: Repository<Review>,
  ) {}

  create(createReviewInput: CreateReviewInput): Promise<Review> {
    const newReview = this.reviewRepository.create(createReviewInput);
    return this.reviewRepository.save(newReview);
  }

  findAll(): Promise<Review[]> {
    return this.reviewRepository.find();
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
}
