import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateArticleOrderInput } from './dto/create-article_order.input';
import { UpdateArticleOrderInput } from './dto/update-article_order.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ArticleOrder } from './entities/article_order.entity';
import { ArticlesService } from '../articles/articles.service';
import { Article } from 'src/articles/entities/article.entity';

@Injectable()
export class ArticleOrderService {
  constructor(
    @InjectRepository(ArticleOrder)
    private articleOrderRepository: Repository<ArticleOrder>,
    @Inject(forwardRef(() => ArticlesService))
    private articlesService: ArticlesService,
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

  getArticle(id: number): Promise<Article> {
    return this.articlesService.findOne(id);
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
