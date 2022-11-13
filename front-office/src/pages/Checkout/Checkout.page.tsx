import React, { useEffect } from 'react';
import { getCart } from '../../constants/helpers/cart';
import { useQuery } from '@apollo/client';
import {
  ArticlesByIdsData,
  ArticlesByIdsVars,
  GET_ARTICLES_BY_IDS,
} from '../../graphql/queries/articles';
import { useApp } from '../../contexts';
import { _HomePageBottomBanner } from '@content/main/footer';
import styles from './Checkout.module.css';
import { OrderSummaryComponent } from '../../components/OrderSummary/OrderSummary.component';
import { OrderFormComponent } from '../../components/OrderForm/OrderForm.component';

export const CheckoutPage = (): JSX.Element => {
  const [_reload, setReload] = React.useState(false);
  const cart = getCart();
  const app = useApp();
  app?.setTitle('Cart');
  app?.setNavigationInfo('reset');
  app?.setFooterInfoText(_HomePageBottomBanner);

  const reload = (really: boolean = false) => {
    if (really) return window.location.reload();
    setReload(!_reload);
  };
  useEffect(() => {}, [_reload]);

  const emptyCard = (
    <section className={`container`}>
      <h1>Cart is empty!</h1>
    </section>
  );

  if (cart.length < 1) return emptyCard;

  const article_ids = cart.map((article) => article.id);

  const { loading, error, data } = useQuery<
    ArticlesByIdsData,
    ArticlesByIdsVars
  >(GET_ARTICLES_BY_IDS, {
    fetchPolicy: 'cache-first',
    variables: {
      ids: article_ids,
    },
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return emptyCard;

  return (
    <section className={`container ${styles.split}`}>
      <OrderFormComponent onSubmit={console.log} />
      <OrderSummaryComponent reload={reload} cart={cart} data={data} />
    </section>
  );
};
