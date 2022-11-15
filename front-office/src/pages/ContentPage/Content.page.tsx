import React from 'react';
import { useApp } from '../../contexts';
import styles from './Content.module.css';
import { MarkdownComponent } from '../../components/Markdown/Markdown.component';
import { _HomePageBottomBanner } from '@content/main/footer';
import { formatString } from '../../contexts/FormatString';

export interface ContentPageProps {
  title: string;
  content: string;
}

export const ContentPage = ({
  title,
  content,
}: ContentPageProps): JSX.Element => {
  const getTitle = title.split('# ');
  const setTitle = getTitle.length > 1 ? getTitle[1] : title.split('#')[1];
  const app = useApp();
  app?.setTitle(setTitle || title || 'Content');
  app?.setFooterInfoText(_HomePageBottomBanner);
  app?.setNavigationInfo(
    [[formatString(setTitle || title || 'Content'), window.location.pathname]],
    ''
  );

  return (
    <section className={`container ${styles.content}`}>
      <MarkdownComponent>{content}</MarkdownComponent>
    </section>
  );
};
