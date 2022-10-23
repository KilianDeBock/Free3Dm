import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateArticleOrderInput } from './dto/create-article_order.input';
import { UpdateArticleOrderInput } from './dto/update-article_order.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ArticleOrder } from './entities/article_order.entity';
import { ArticlesService } from '../articles/articles.service';
import { Article } from 'src/articles/entities/article.entity';
import { OrdersService } from '../orders/orders.service';
import { Order } from '../orders/entities/order.entity';

@Injectable()
export class ArticleOrderService {
  constructor(
    @InjectRepository(ArticleOrder)
    private articleOrderRepository: Repository<ArticleOrder>,
    @Inject(forwardRef(() => ArticlesService))
    private articlesService: ArticlesService,
    @Inject(forwardRef(() => OrdersService))
    private ordersService: OrdersService,
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

  findAllByOrderId(id: number): Promise<ArticleOrder[]> {
    return this.articleOrderRepository.find({ where: { orderId: id } });
  }

  findAllByArticleId(id: number): Promise<ArticleOrder[]> {
    return this.articleOrderRepository.find({ where: { articleId: id } });
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

  // Gets: Functions that execute another entity's service function.
  getArticle(id: number): Promise<Article> {
    return this.articlesService.findOne(id);
  }

  getOrder(id: number): Promise<Order> {
    return this.ordersService.findOne(id);
  }
}
