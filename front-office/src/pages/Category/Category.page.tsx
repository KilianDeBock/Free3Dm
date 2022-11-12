import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CategoriesData, Category, GET_ALL_CATEGORIES } from '@graphql';
import { useQuery } from '@apollo/client';
import { useApp } from '../../contexts';
import { CategoryProductsComponent } from '../../components/CategoryProducts/CategoryProducts.component';
import styles from './Category.module.css';
import { checkArticle } from '../../constants/helpers/checkArticle';
import { setFooterInfoFromCategory } from '../../constants/helpers/setFooterInfoFromCategory';
import { formatString } from '../../contexts/FormatString';

export const CategoryPage = (): JSX.Element => {
  const app = useApp();
  type CategoryState = Category | null;
  const [category, setCategory] = useState<CategoryState>(null);
  let { name } = useParams();

  app?.setNavigationInfo('reset');

  const { loading, error, data } = useQuery<CategoriesData>(
    GET_ALL_CATEGORIES,
    {
      fetchPolicy: 'cache-first',
    }
  );

  useEffect(() => {
    const _category: CategoryState =
      data?.categories?.find(
        (c) => c.name.toLowerCase() === name?.toLowerCase()
      ) || null;

    setCategory(_category);
    const categoryName = formatString(_category?.name || 'Category Not Found');
    app?.setTitle(categoryName);
    setFooterInfoFromCategory(app, categoryName);
  }, [data, name]);

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

  const productsCount =
    category?.products?.reduce((totalLength, { articles }) => {
      articles =
        articles?.filter((article) => checkArticle(article)) ?? articles;
      const articlesLength = articles?.length ?? 0;
      return totalLength + articlesLength;
    }, 0) ?? 0;
  const countIsOne = productsCount === 1;

  const categoryName = formatString(category?.name || 'Category Not Found');
  app?.setNavigationInfo(
    [[categoryName, `/category/${name?.toLowerCase()}`]],
    `There ${countIsOne ? 'is' : 'are'} ${productsCount} product${
      !countIsOne ? 's' : ''
    }`
  );

  return (
    <>
      <section className={`container ${styles['category-content']}`}>
        <ul>
          <li>Test</li>
        </ul>
        <div>
          <h1>{categoryName}</h1>
          <CategoryProductsComponent category={category} />
        </div>
      </section>
    </>
  );
};
