import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { useApp } from '../../contexts';
import {
  Article,
  GET_PRODUCT,
  getDetail,
  ProductData,
  ProductVars,
} from '@graphql';
import { ProductComponent } from '../../components';
import { ReviewsComponent } from '../../components/Reviews/Reviews.component';
import { ContentCardComponent } from '../../components/ContentCard/ContentCard.component';
import { checkArticle } from '../../constants/helpers/checkArticle';
import styles from './Product.module.css';
import { _HomePageBottomBanner } from '@content/main/footer';

export interface ArticleOptions {
  [key: string]: string;
}

export const ProductPage = (): JSX.Element => {
  const app = useApp();
  app?.setFooterInfoText(_HomePageBottomBanner);
  const [article, setArticle] = useState<Article | undefined>(undefined);
  const [options, _setOptions] = useState<ArticleOptions>({ amount: '1' });
  const setOption = (option: string, value: string) =>
    _setOptions({
      ...options,
      [option]: value,
    });
  const { id, name, category, articleId } = useParams();

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
      [
        category?.toLowerCase() ?? 'unknown',
        `/category/${category?.toLowerCase()}`,
      ],
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
  if (articleId && parseInt(articleId) > 0 && data.product.articles) {
    const gotArticle = data.product.articles.find(
      (article) => article.id === parseInt(articleId)
    );
    if (gotArticle && article?.id !== gotArticle.id) setArticle(gotArticle);
  } else {
    const firstArticle = data?.product?.articles?.[0];
    if (firstArticle && article?.id !== firstArticle.id)
      setArticle(firstArticle);
  }

  if (article && !checkArticle(article)) return <p>Article not found</p>;
  if (!article?.details) return <p>Product not found</p>;

  const articleName = getDetail<string>(article.details, 'name') || 'Unknown';

  if (articleName.toLowerCase() !== name?.toLowerCase())
    return <p>Article not found</p>;

  const product = { ...data.product };
  product.articles =
    data.product.articles?.filter((a) => checkArticle(a)) || [];

  return (
    <div className={styles.product__container}>
      <ProductComponent
        product={product}
        article={article}
        setOption={setOption}
      />
      <section className={'container'}>
        <h2>Description</h2>
        <ContentCardComponent renderMarkdown={true}>
          {data.product.description}
        </ContentCardComponent>
      </section>
      <section className={'container'}>
        <h2>Reviews</h2>
        <ReviewsComponent product={data.product} />
      </section>
    </div>
  );
};
