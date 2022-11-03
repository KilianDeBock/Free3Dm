import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT, ProductData, ProductVars } from '@graphql';
import { useApp } from '../../contexts';
import { StarsComponent } from '../../components';

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
        category?.toLowerCase() ?? 'unknown',
        `/category/${category?.toLowerCase()}`,
      ],
      ['products', `/category/${category?.toLowerCase()}/products`],
      [
        name?.toLowerCase() ?? 'unknown',
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

  const reviewStars = data?.product?.articles?.reduce(
    (acc, inc) => {
      let tot = 0;
      let got = 0;
      let reviews = 0;
      inc?.reviews?.forEach((review) => {
        tot += 5;
        got += review.stars;
        reviews++;
      });

      acc.tot += tot;
      acc.got += got;
      acc.reviews += reviews;

      return acc;
    },
    { tot: 0, got: 0, reviews: 0 }
  ) ?? { tot: 0, got: 0, reviews: 0 };

  const stars =
    Math.round((reviewStars?.got / reviewStars?.tot) * 5 * 10) / 10 || 0;
  const rating = Math.round((reviewStars?.got / reviewStars?.tot) * 10) || 0;

  return (
    <>
      <section>
        <aside>
          <img src="" alt="Whoops" />
        </aside>
        <article>
          <h1>{data.product.name}</h1>
          <span>
            <StarsComponent rating={rating}>
              {reviewStars.reviews} reviews ({stars}/5)
            </StarsComponent>
          </span>
          <p>{data.product.description}</p>
        </article>
      </section>
    </>
  );
};
