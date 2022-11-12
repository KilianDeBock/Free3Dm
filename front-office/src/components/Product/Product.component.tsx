import styles from './Product.module.css';
import { ImageCardComponent } from '../ImageCard/ImageCard.component';
import { Article, getDetail, Product } from '@graphql';
import { getStars, StarsComponent } from '../Stars/Stars.component';
import { SelectComponent } from '../Select/Select.component';
import { ButtonComponent } from '../Button/Button.component';
import { _AddToCartButton } from '@content/buttons';
import React from 'react';
import { checkArticle } from '../../constants/helpers/checkArticle';
import { useNavigate, useParams } from 'react-router';

export interface ProductProps {
  product: Product;
  article: Article;
  setOption?: (option: string, value: string) => void;
  addToCart?: () => void;
}

export const ProductComponent = ({
  product,
  article,
  setOption,
  addToCart,
}: ProductProps): JSX.Element => {
  if (!checkArticle(article)) return <p>Article not found</p>;
  if (!article) return <p>Product not found</p>;
  if (!article.details) return <p>Product details not found</p>;
  const r = useParams();
  const navigate = useNavigate();
  const articleName = getDetail<string>(article.details, 'name') || 'unknown';

  // Get stars
  const [{ rating, stars }, { totalReviews }] = getStars(product?.articles);

  const color = getDetail<string>(article?.details, 'color');

  return (
    <section className={`container ${styles.product}`}>
      <aside className={styles.product__image}>
        <ImageCardComponent
          image={getDetail(article?.details, 'image') || ''}
          alt={product.name}
        />
      </aside>
      <article className={styles.product__details}>
        <h1 className={styles.product__title}>{product.name}</h1>
        <span>
          <StarsComponent rating={rating}>
            {totalReviews} reviews ({stars}/5)
          </StarsComponent>
        </span>
        <span className={styles.product__price}>${article?.price}</span>
        <SelectComponent
          onChange={(value) => setOption && setOption('amount', value)}
        />
        {color && <span>Color: {color}</span>}

        {product.articles && product.articles.length > 1 && (
          <SelectComponent
            onChange={(value) => {
              const option = JSON.parse(value);
              navigate(
                `/category/${r.category?.toLowerCase()}/product/${r.id}/${
                  option.id
                }/${option.name.toLowerCase()}`
              );
            }}
            defaultValue={JSON.stringify({
              id: article.id,
              name: articleName,
            })}
          >
            {product.articles?.map((a, i) => {
              const id = a.id;
              const name = getDetail<string>(a.details, 'name') || 'unknown';
              const value = JSON.stringify({
                id,
                name,
              });

              return (
                <option key={i} value={value}>
                  {name}
                </option>
              );
            })}
          </SelectComponent>
        )}
        <ButtonComponent
          handleClick={() => addToCart && addToCart()}
          type={'primary'}
        >
          {_AddToCartButton}
        </ButtonComponent>
      </article>
    </section>
  );
};
