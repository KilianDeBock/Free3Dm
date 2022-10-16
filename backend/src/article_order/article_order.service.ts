import { Injectable } from '@nestjs/common';
import { CreateArticleOrderInput } from './dto/create-article_order.input';
import { UpdateArticleOrderInput } from './dto/update-article_order.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ArticleOrder } from './entities/article_order.entity';

@Injectable()
export class ArticleOrderService {
  constructor(
    @InjectRepository(ArticleOrder)
    private articleOrderRepository: Repository<ArticleOrder>,
  ) {}

  create(
    createArticleOrderInput: CreateArticleOrderInput,
  ): Promise<ArticleOrder> {
    const newArticleOrder = this.articleOrderRepository.create(
      createArticleOrderInput,
    );
    return this.articleOrderRepository.save(newArticleOrder);
  }

  findAll(): Promise<ArticleOrder[]> {
    return this.articleOrderRepository.find();
  }

  findOne(orderId: number, articleId: number): Promise<ArticleOrder> {
    return this.articleOrderRepository.findOneByOrFail({ orderId, articleId });
  }

  update(
    orderId: number,
    articleId: number,
    updateArticleOrderInput: UpdateArticleOrderInput,
  ): Promise<ArticleOrder> {
    const oldAddress = this.articleOrderRepository.findOneByOrFail({
      orderId,
      articleId,
    });
    const newAddress = { ...oldAddress, ...updateArticleOrderInput };
    return this.articleOrderRepository.save(newAddress);
  }

  remove(orderId: number, articleId: number): Promise<DeleteResult> {
    return this.articleOrderRepository.delete({ orderId, articleId });
  }
}
