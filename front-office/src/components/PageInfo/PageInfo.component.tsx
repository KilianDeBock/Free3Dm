import React from 'react';
import styles from './PageInfo.module.css';
import bannerStyles from './Banner.module.css';
import { useApp } from '../../contexts';
import { _HomePageBottomBanner } from '@content/main/footer';
import { MarkdownComponent } from '../Markdown/Markdown.component';

interface PageInfoProps {
  children?: React.ReactNode;
}

export const PageInfoComponent = ({ children }: PageInfoProps) => {
  const app = useApp();
  const text = app?.footerInfoText || _HomePageBottomBanner;
  const title = text.split('\n')[0].replaceAll('## ', '').replaceAll('##', '');
  const description = text.split('\n').slice(1).join('\n');

  return (
    <div className={styles['page-info']}>
      <div className={bannerStyles.banner}></div>
      <article className={styles['page-info__content']}>
        <h1 className={styles['page-info__title']}>{title}</h1>
        <span className={styles['page-info__text']}>
          <MarkdownComponent content={description} />
        </span>
      </article>
    </div>
  );
};
