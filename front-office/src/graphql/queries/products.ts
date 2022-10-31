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
  id: string;
}

export const GET_PRODUCT = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
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
`;
