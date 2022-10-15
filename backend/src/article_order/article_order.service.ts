import { Injectable } from '@nestjs/common';
import { CreateArticleOrderInput } from './dto/create-article_order.input';
import { UpdateArticleOrderInput } from './dto/update-article_order.input';

@Injectable()
export class ArticleOrderService {
  create(createArticleOrderInput: CreateArticleOrderInput) {
    return 'This action adds a new articleOrder';
  }

  findAll() {
    return `This action returns all articleOrder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} articleOrder`;
  }

  update(id: number, updateArticleOrderInput: UpdateArticleOrderInput) {
    return `This action updates a #${id} articleOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} articleOrder`;
  }
}
