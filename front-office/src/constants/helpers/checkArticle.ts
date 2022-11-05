import { Article, getDetail } from '@graphql';

const check = (against: (string | undefined)[]) => {
  return against.every((i) => i);
};

export const checkArticle = (article: Article) => {
  if (!article?.details) return false;

  const image = getDetail<string>(article?.details, 'image');
  const name = getDetail<string>(article?.details, 'name');

  return check([image, name]);
};
