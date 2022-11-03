import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT, ProductData, ProductVars } from '@graphql';
import { useApp } from '../../contexts';

export const ProductPage = (): JSX.Element => {
  const app = useApp();
  const { id, name, category } = useParams();

  if (!id) return <p>Product not found</p>;

  const { loading, error, data } = useQuery<ProductData, ProductVars>(
    GET_PRODUCT,
    {
      fetchPolicy: 'cache-first',
      variables: {
        id: parseInt(id),
      },
    }
  );

  app?.setNavigationInfo(
    [
      ['categories', '/category'],
      [
        category?.toLowerCase() ?? 'unkown',
        `/category/${category?.toLowerCase()}`,
      ],
      ['products', `/category/${category?.toLowerCase()}/products`],
      [
        name?.toLowerCase() ?? 'unkown',
        `/category/${category?.toLowerCase()}/product/${name?.toLowerCase()}/${id}`,
      ],
    ],
    ''
  );

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;
  if (!data?.product) return <p>Product not found</p>;
  if (data.product.category.name.toLowerCase() !== category?.toLowerCase())
    return <p>Product category not found</p>;

  console.log(data);

  return <>Hello world {id}!</>;
};
