import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { useApp } from '../../contexts';
import {
  CardComponent,
  getStars,
  SelectComponent,
  StarsComponent,
} from '../../components';
import {
  Article,
  GET_PRODUCT,
  getDetail,
  ProductData,
  ProductVars,
} from '@graphql';
import styles from './Product.module.css';

export interface ArticleOptions {
  [key: string]: string;
}

export const ProductPage = (): JSX.Element => {
  const app = useApp();
  const [article, setArticle] = useState<Article | undefined>(undefined);
  const [options, _setOptions] = useState<ArticleOptions>({ amount: '1' });
  const setOption = (option: string, value: string) =>
    _setOptions({
      ...options,
      [option]: value,
    });
  const { id, name, category } = useParams();

  if (!id) return <p>Product not found</p>;

  const { loading, error, data } = useQuery<ProductData, ProductVars>(
    GET_PRODUCT,
    {
      fetchPolicy: 'cache-first',
      variables: {
        id: parseInt(id),
      },
    }
  );

  app?.setNavigationInfo(
    [
      ['categories', '/category'],
      [
        category?.toLowerCase() ?? 'unknown',
        `/category/${category?.toLowerCase()}`,
      ],
      ['products', `/category/${category?.toLowerCase()}/products`],
      [
        name?.toLowerCase() ?? 'unknown',
        `/category/${category?.toLowerCase()}/product/${name?.toLowerCase()}/${id}`,
      ],
    ],
    ''
  );

  // Errors:
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;
  if (!data?.product) return <p>Product not found</p>;
  if (data.product.category.name.toLowerCase() !== category?.toLowerCase())
    return <p>Product category not found</p>;

  // Set initial article
  const firstArticle = data?.product?.articles?.[0];
  if (firstArticle && article?.id !== firstArticle.id) setArticle(firstArticle);

  if (!article?.details) return <p>Product not found</p>;

  // Get stars
  const [{ rating, stars }, { totalReviews }] = getStars(
    data?.product?.articles
  );

  const color = getDetail<string>(article?.details, 'color');
  console.log(options);

  return (
    <>
      <section className={`container ${styles.product}`}>
        <aside className={styles.product__image}>
          <CardComponent
            image={getDetail(article?.details, 'image') || ''}
            alt={data.product.name}
          />
        </aside>
        <article>
          <h1 className={styles.product__title}>{data.product.name}</h1>
          <span>
            <StarsComponent rating={rating}>
              {totalReviews} reviews ({stars}/5)
            </StarsComponent>
          </span>
          <span className={styles.product__price}>${article?.price}</span>
          <SelectComponent onChange={(value) => setOption('amount', value)} />
          {color && <span>Color: {color}</span>}
        </article>
      </section>
      <article className={`container ${styles.product__description}`}>
        <p>{data.product.description}</p>
      </article>
    </>
  );
};
