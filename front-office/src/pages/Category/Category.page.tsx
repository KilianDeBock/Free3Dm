import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CategoriesData, Category, GET_ALL_CATEGORIES } from '../../graphql';
import { useQuery } from '@apollo/client';
import { useApp } from '../../contexts';

export const CategoryPage = (): JSX.Element => {
  const app = useApp();
  const [category, setCategory] = useState<Category | null>(null);
  let { name } = useParams();

  const { loading, error, data } = useQuery<CategoriesData>(
    GET_ALL_CATEGORIES,
    {
      fetchPolicy: 'cache-first',
    }
  );

  useEffect(() => {
    const category: Category | undefined = data?.categories?.find(
      (category) => category.name.toLowerCase() === name?.toLowerCase()
    );

    if (data && category) {
      setCategory(category);
      app?.setTitle(category.name);
    }
  }, [data]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;
  if (!(data && category)) {
    app?.setTitle('Category Not Found');
    return (
      <>
        <h1>Category {name} not found!</h1>
      </>
    );
  }

  return <>{category?.name}</>;
};
