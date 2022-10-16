import { Injectable } from '@nestjs/common';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  create(createArticleInput: CreateArticleInput): Promise<Article> {
    const newArticle = this.articleRepository.create(createArticleInput);
    return this.articleRepository.save(newArticle);
  }

  findAll(): Promise<Article[]> {
    return this.articleRepository.find();
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
}
