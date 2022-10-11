import React from 'react';
import styles from './CardGroup.module.css';
import { CardComponent, CardProps } from './Card.component';

export interface CardGroupProps {
  cards: CardProps[];
  title?: string | null;
}

export const CardGroupComponent = ({ cards, title = null }: CardGroupProps) => {
  return (
    <ul className={`container ${styles.cards}`}>
      {title ? (
        <li className={styles.cards__title}>
          <h2 className={styles.title}>{title}</h2>
        </li>
      ) : null}
      {cards.map((card, i) => (
        <li key={i}>
          <CardComponent
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
