import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateDetailInput } from './dto/create-detail.input';
import { UpdateDetailInput } from './dto/update-detail.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Detail } from './entities/detail.entity';
import { Article } from '../articles/entities/article.entity';
import { ArticlesService } from '../articles/articles.service';
import { ProductsService } from '../products/products.service';

@Injectable()
export class DetailsService {
  constructor(
    @InjectRepository(Detail) private detailRepository: Repository<Detail>,
    @Inject(forwardRef(() => ArticlesService))
    private articlesService: ArticlesService,
    @Inject(forwardRef(() => ProductsService))
    private productsService: ProductsService,
  ) {}

  create(createDetailInput: CreateDetailInput): Promise<Detail> {
    const newDetail = this.detailRepository.create(createDetailInput);
    return this.detailRepository.save(newDetail);
  }

  findAll(): Promise<Detail[]> {
    return this.detailRepository.find();
  }

  findAllByArticleId(id: number): Promise<Detail[]> {
    return this.detailRepository.find({ where: { articleId: id } });
  }

  findOne(id: number): Promise<Detail> {
    return this.detailRepository.findOneByOrFail({ id });
  }

  update(id: number, updateDetailInput: UpdateDetailInput): Promise<Detail> {
    const oldDetail = this.detailRepository.findOneByOrFail({ id });
    const newDetail = { ...oldDetail, ...updateDetailInput };
    return this.detailRepository.save(newDetail);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.detailRepository.delete({ id });
  }

  // Gets: Functions that execute another entity's service function.
  getArticle(id: number): Promise<Article> {
    return this.articlesService.findOne(id);
  }

  async getAllArticlesBySearch(
    search: string,
    idsOnly = false,
  ): Promise<number[] | Article[]> {
    const namesResult = await this.detailRepository.find({
      where: {
        key: 'name',
        value: ILike(`%${search}%`),
      },
      relations: ['article'],
    });
    const nameIds = namesResult.map((detail) => detail.article.id);

    const ids = [...new Set(nameIds)];

    if (idsOnly) return ids;
    return ids.length > 0 ? this.articlesService.findAllByIds(ids, true) : [];
  }
}
