import { gql } from '@apollo/client';
import { Category } from '../';

export const GET_ALL_CATEGORIES = gql`
  query getCategory {
    categories {
      name
      products {
        id
        articles {
          price
        }
      }
    }
  }
`;

export interface CategoriesData {
  categories: Category[];
}

// export const GET_ACCOUNT = gql`
//   query GetAccount($id: ID!) {
//     account(id: $id) {
//       id
//       email
//     }
//   }
// `;
//
// export interface CategoryData {
//   category: Category;
// }
