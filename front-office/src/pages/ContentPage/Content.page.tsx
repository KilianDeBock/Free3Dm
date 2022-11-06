import React from 'react';
import { useApp } from '../../contexts';
import styles from './Content.module.css';
import { MarkdownComponent } from '../../components/Markdown/Markdown.component';

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
  useApp()?.setTitle(setTitle || title || 'Content');

  return (
    <section className={`container ${styles.content}`}>
      <MarkdownComponent>{content}</MarkdownComponent>
    </section>
  );
};
