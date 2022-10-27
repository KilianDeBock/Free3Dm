import { getAllMarkdownFiles } from './getAllMarkdownFiles';
import { createMarkdownFile, MarkdownObject } from './createMarkdownFile';

export interface PrefixSuffix {
  prefix?: string;
  suffix?: string;
}

export const generate = (
  generate: string,
  from: string,
  add: PrefixSuffix = { prefix: '', suffix: '' },
): MarkdownObject => {
  const { prefix = '', suffix = '' }: PrefixSuffix = add;
  const contents = getAllMarkdownFiles(from, prefix, suffix);
  return createMarkdownFile(contents, generate);
};
