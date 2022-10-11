import React from 'react';

import styles from './Image.module.css';
import bannerStyles from './Banner.module.css';

interface ImageProps {
  image: string;
  alt: string;
  nice?: boolean;
}

export const ImageComponent = ({ image, alt, nice = false }: ImageProps) =>
  nice ? (
    <article className={`${styles.image} ${styles['image--nice']}`}>
      <div className={bannerStyles.banner}></div>
      <img
        className={`container ${styles['image--nice__image']}`}
        src={image}
        alt={alt}
      />
    </article>
  ) : (
    <img className={`container ${styles.image}`} src={image} alt={alt} />
  );
