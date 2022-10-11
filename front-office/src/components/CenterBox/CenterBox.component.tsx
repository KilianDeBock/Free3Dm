import React from 'react';

import styles from './CenterBox.module.css';

interface CenterBoxProps {
  children?: React.ReactNode;
  title?: string | null;
  text?: string | null;
}

export const CenterBoxComponent = ({
  children,
  title = null,
  text = null,
}: CenterBoxProps) =>
  title && text ? (
    <section className={`container ${styles['center-box']}`}>
      <h1 className={styles['center-box__title']}>{title}</h1>
      <p className={styles['center-box__text']}>{text}</p>
    </section>
  ) : (
    <section className={`container ${styles['center-box']}`}>
      {children}
    </section>
  );
