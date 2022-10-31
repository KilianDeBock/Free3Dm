import { gql } from '@apollo/client';
import { Category } from '../';

export interface CategoriesData {
  categories: Category[];
}

export const GET_ALL_CATEGORIES = gql`
  query getCategory {
    categories {
      name
      products {
        id
        name
        articles {
          price
          details {
            key
            value
          }
        }
      }
    }
  }
`;

export interface CategoryData {
  category: Category;
}

export interface CategoryVars {
  id: string;
}

export const GET_CATEGORY = gql`
  query getCategory($id: ID!) {
    category(id: $id) {
      name
      products {
        id
        name
        articles {
          price
          details {
            key
            value
          }
        }
      }
    }
  }
`;
