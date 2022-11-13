import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import {
  ArticlesByNameData,
  ArticlesByNameVars,
  GET_ALL_ARTICLES_BY_NAME,
} from '../../graphql/queries/articles';
import React from 'react';
import styles from './Search.module.css';
import { checkArticle } from '../../constants/helpers/checkArticle';
import { getDetail } from '@graphql';
import { ImageCardComponent, LinkComponent } from '../../components';

export const SearchPage = () => {
  let { query = 'Print' } = useParams();

  console.log(query);

  const { loading, error, data } = useQuery<
    ArticlesByNameData,
    ArticlesByNameVars
  >(GET_ALL_ARTICLES_BY_NAME, {
    fetchPolicy: 'cache-first',
    variables: {
      name: query,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }
  if (!data) return <p>Not found</p>;

  return (
    <section className={'container'}>
      <ul className={styles['items']}>
        {data.articlesByName?.map((article) => {
          if (!checkArticle(article)) return;
          const { details, id, price: p } = article;

          // Check if the required image details is available.
          const hasImage = details?.find(({ key }) => key === 'image');

          // Check if we have an image and detail(s).
          if (!details || !hasImage || details.length < 1) return;

          // Get variables for the card component.
          const image = getDetail<string>(details, 'image') || '/';
          const title = getDetail<string>(details, 'name') || 'unknown';
          const price = p.toString() || 'Unknown';

          const pId = article.product.id;
          const cName = article.product.category.name;

          // Merge them into a single object.
          const props = { image, title, alt: title, price };

          // Return the card component.
          return (
            <li key={id}>
              <LinkComponent
                link={`/category/${cName}/product/${pId}/${id}/${title}`}
              >
                <ImageCardComponent {...props} />
              </LinkComponent>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
