import React from 'react';
import ReactMarkdown from 'react-markdown';
import { components, remarkPlugins } from './Markdown.config';

export interface MarkdownProps {
  children?: string;
  content?: string;
}

export const MarkdownComponent = ({
  children,
  content,
}: MarkdownProps): JSX.Element => {
  // Get content for markdown conversion.
  const markdownContent: string = children || content || '';

  // Join all props
  const props = { components, remarkPlugins };

  // Return markdown JSX.Element
  return <ReactMarkdown {...props}>{markdownContent}</ReactMarkdown>;
};
