import React from 'react';
import styles from './ImageCardGroup.module.css';
import { ImageCardComponent, ImageCardProps } from './ImageCard.component';

export interface ImageCardGroupProps {
  cards: ImageCardProps[];
  title?: string | null;
}

export const ImageCardGroupComponent = ({
  cards,
  title = null,
}: ImageCardGroupProps) => {
  return (
    <ul className={`container ${styles.cards}`}>
      {title ? (
        <li className={styles.cards__title}>
          <h2 className={styles.title}>{title}</h2>
        </li>
      ) : null}
      {cards.map((card, i) => (
        <li key={i}>
          <ImageCardComponent
            alt={card.alt}
            image={card.image}
            title={card.title}
            price={card.price}
            liked={!!card?.liked}
          />
        </li>
      ))}
    </ul>
  );
};
