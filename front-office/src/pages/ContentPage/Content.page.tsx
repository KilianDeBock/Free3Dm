import React from 'react';
import { useApp } from '../../contexts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
    <section className={'container'}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </section>
  );
};
