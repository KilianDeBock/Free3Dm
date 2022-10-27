import { getAllMarkdownFiles } from './getAllMarkdownFiles';
import { createMarkdownFile } from './createMarkdownFile';

export interface PrefixSuffix {
  prefix?: string;
  suffix?: string;
}

export const generate = (
  generate: string,
  from: string,
  add: PrefixSuffix,
): void => {
  const { prefix = '', suffix = '' }: PrefixSuffix = add;
  const contents = getAllMarkdownFiles(from, prefix, suffix);
  console.log(contents);
  createMarkdownFile(contents, generate);
};
