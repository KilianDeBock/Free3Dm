import { Article } from '@graphql';
import { gql } from '@apollo/client';

export interface ArticlesByIdsData {
  articlesByIds: Article[];
}

export interface ArticlesByIdsVars {
  ids: number[];
}

export const GET_ARTICLES_BY_IDS = gql`
  query getArticle($ids: [Int!]!) {
    articlesByIds(ids: $ids) {
      id
      price
      details {
        key
        value
      }
    }
  }
`;

export interface ArticlesByNameData {
  articlesByName: Article[];
}

export interface ArticlesByNameVars {
  name: string;
}

export const GET_ALL_ARTICLES_BY_NAME = gql`
  query getArticleByName($name: String!) {
    articlesByName(name: $name) {
      id
      price
      details {
        key
        value
      }
      product {
        id
        name
        category {
          id
          name
        }
      }
    }
  }
`;

export interface ArticleData {
  article: Article;
}

export interface ArticleVars {
  id: string;
}

export const GET_ARTICLE = gql`
  query getArticle($id: ID!) {
    article {
      id
      price
      details {
        key
        value
      }
    }
  }
`;
