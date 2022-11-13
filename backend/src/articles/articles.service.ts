import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Article } from './entities/article.entity';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/entities/product.entity';
import { DetailsService } from 'src/details/details.service';
import { ReviewsService } from 'src/reviews/reviews.service';
import { Detail } from '../details/entities/detail.entity';
import { Review } from '../reviews/entities/review.entity';
import { ArticleOrderService } from '../article_order/article_order.service';
import { ArticleOrder } from '../article_order/entities/article_order.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
    @Inject(forwardRef(() => ArticleOrderService))
    private articleOrderService: ArticleOrderService,
    @Inject(forwardRef(() => ProductsService))
    private productsService: ProductsService,
    @Inject(forwardRef(() => DetailsService))
    private detailsService: DetailsService,
    @Inject(forwardRef(() => ReviewsService))
    private reviewsService: ReviewsService,
  ) {}

  create(createArticleInput: CreateArticleInput): Promise<Article> {
    const newArticle = this.articleRepository.create(createArticleInput);
    return this.articleRepository.save(newArticle);
  }

  findAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  findAllByProductId(id: number): Promise<Article[]> {
    return this.articleRepository.find({ where: { productId: id } });
  }

  async findAllByName(name: string): Promise<Article[]> {
    const detailIds = (await this.detailsService.getAllArticlesBySearch(
      name,
      true,
    )) as number[];
    const productIds = (await this.productsService.getAllArticlesBySearch(
      name,
      true,
    )) as number[];

    const ids = [...new Set([...detailIds, ...productIds])];
    return ids.length > 0 ? this.findAllByIds(ids, true) : [];
  }

  findAllByIds(ids: number[], withDetails = false): Promise<Article[]> {
    const add = withDetails ? { relations: ['details'] } : {};
    const idsEntities = ids.map((id) => {
      return { id };
    });
    return this.articleRepository.find({ where: idsEntities, ...add });
  }

  findOne(id: number): Promise<Article> {
    return this.articleRepository.findOneByOrFail({ id });
  }

  update(id: number, updateArticleInput: UpdateArticleInput): Promise<Article> {
    const oldArticle = this.articleRepository.findOneByOrFail({ id });
    const newArticle = { ...oldArticle, ...updateArticleInput };
    return this.articleRepository.save(newArticle);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.articleRepository.delete({ id });
  }

  // Gets: Functions that execute another entity's service function.
  getProduct(id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }

  getAllDetails(id: number): Promise<Detail[]> {
    return this.detailsService.findAllByArticleId(id);
  }

  getAllReviews(id: number): Promise<Review[]> {
    return this.reviewsService.findAllByArticleId(id);
  }

  getAllOrders(id: number): Promise<ArticleOrder[]> {
    return this.articleOrderService.findAllByArticleId(id);
  }
}
