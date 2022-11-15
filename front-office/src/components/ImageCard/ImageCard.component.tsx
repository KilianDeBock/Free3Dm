import React from 'react';

import styles from './ImageCard.module.css';

export interface ImageCardProps {
  image: string;
  alt: string;
  title?: string;
  price?: string;
  liked?: boolean;
}

export const ImageCardComponent = ({
  image,
  alt,
  title,
  price,
  liked = false,
}: ImageCardProps) => (
  <article className={styles.card}>
    <img className={styles['card__image']} src={image} alt={alt} />
    <section className={styles['card__content']}>
      {title && <h3 className={styles['card__title']}>{title}</h3>}
      {price && <p className={styles['card__price']}>{price}</p>}
      <button
        className={`step_like ${styles['card__like']} ${
          liked && styles['card__like--liked']
        }`}
      >
        Add to wishlist
      </button>
    </section>
  </article>
);
