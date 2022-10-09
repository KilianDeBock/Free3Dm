import React from 'react';
import styles from './PageInfo.module.css';
import bannerStyles from './Banner.module.css';

interface PageInfoProps {
  children?: React.ReactNode;
}

export const PageInfoComponent = ({ children }: PageInfoProps) => (
  <div className={styles['page-info']}>
    <div className={bannerStyles.banner}></div>
    <article className={styles['page-info__content']}>
      <h1 className={styles['page-info__title']}>et dolore magna aliquyam</h1>
      <p className={styles['page-info__text']}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
    </article>
  </div>
);
