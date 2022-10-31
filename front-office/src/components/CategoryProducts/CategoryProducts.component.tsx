import React from 'react';
import { Category, getDetail } from '@graphql';
import { CardComponent } from '../Card/Card.component';

export interface CardProps {
  category: Category;
}

export const CategoryProductsComponent = ({ category }: CardProps) => {
  console.log(category);
  return (
    <ul>
      {category.products?.map((product, index) => {
        if (!product.articles || product.articles.length < 1) return;
        const article = product.articles[0];

        const articleHasImageDetail = article.details?.find((detail) => {
          return detail.key === 'image';
        });
        if (
          !article.details ||
          article.details.length < 1 ||
          !articleHasImageDetail
        )
          return;

        return (
          <CardComponent
            key={index}
            image={getDetail<string>(article.details, 'image') || '/'}
            title={product.name}
            alt={product.name}
            price={article.price.toString() || 'Unknown'}
          />
        );
      })}
    </ul>
  );
};
