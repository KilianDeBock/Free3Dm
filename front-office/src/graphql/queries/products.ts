import { gql } from '@apollo/client';
import { Product } from '../';

export interface ProductsData {
  products: Product[];
}

export const GET_ALL_PRODUCTS = gql`
  query getProduct {
    products {
      id
      name
      articles {
        id
        price
        details {
          key
          value
        }
      }
    }
  }
`;

export interface ProductData {
  product: Product;
}

export interface ProductVars {
  id: number;
}

export const GET_PRODUCT = gql`
  query getProduct($id: Int!) {
    product(id: $id) {
      id
      name
      category {
        name
      }
      description
      articles {
        id
        price
        details {
          key
          value
        }
        reviews {
          stars
          title
          review
          customer {
            firstName
          }
        }
      }
    }
  }
`;
