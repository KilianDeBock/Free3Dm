import React, { useState } from 'react';
import styles from './ContentCard.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { StarsComponent } from '../Stars/Stars.component';

export interface ContentCardProps {
  children?: string;
  name?: string;
  note?: string;
  image?: string;
  stars?: number;
  renderMarkdown?: boolean;
  list?: boolean;
  openId?: number;
  onExpand?: (id: number) => void;
  id?: number;
}

export const ContentCardComponent = ({
  children,
  name,
  note,
  stars,
  image,
  renderMarkdown = false,
  list = false,
  onExpand,
  openId,
  id,
}: ContentCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (openId && id) {
    if (openId === id && !isOpen) setIsOpen(true);
    if (openId !== id && isOpen) setIsOpen(false);
  }

  const toggleOpen = () => {
    if (onExpand && id) {
      if (!isOpen) onExpand(id);
      if (isOpen) onExpand(0);
    }
    setIsOpen(!isOpen);
  };

  const rating = stars !== undefined ? stars * 2 : null;

  const cardInner = (
    <section className={styles['card__content']}>
      {(name || note || rating) && (
        <aside className={styles['card__details']}>
          {name && <h3 className={styles['card__name']}>{name}</h3>}
          {note && <em>{note}</em>}
          {rating !== null && <StarsComponent rating={rating} />}
        </aside>
      )}
      {children &&
        (renderMarkdown ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
        ) : (
          children
        ))}
      <button onClick={toggleOpen} className={styles['card__opener']}>
        Read more
      </button>
    </section>
  );

  const cardOuter = (
    <>
      {(image && (
        <>
          <aside className={styles['card__side-content']}>
            <img className={styles['card__image']} src={image} alt={name} />
          </aside>
          {cardInner}
        </>
      )) ||
        cardInner}
    </>
  );

  return (
    <>
      {list ? (
        <li className={`${isOpen ? styles.open : ''} ${styles.card}`}>
          {cardOuter}
        </li>
      ) : (
        <article className={`${isOpen ? styles.open : ''} ${styles.card}`}>
          {cardOuter}
        </article>
      )}
    </>
  );
};
