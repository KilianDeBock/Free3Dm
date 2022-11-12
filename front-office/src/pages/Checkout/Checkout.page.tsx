import React, { useEffect } from 'react';
import {
  addToCart,
  getCart,
  removeFromCart,
} from '../../constants/helpers/cart';
import { useQuery } from '@apollo/client';
import {
  ArticlesByIdsData,
  ArticlesByIdsVars,
  GET_ARTICLES_BY_IDS,
} from '../../graphql/queries/articles';
import { useApp } from '../../contexts';
import { _HomePageBottomBanner } from '@content/main/footer';
import styles from './Checkout.module.css';
import { getDetail } from 'src/graphql';
import { ButtonComponent, SelectComponent } from '../../components';
import { checkArticle } from '../../constants/helpers/checkArticle';

export const CheckoutPage = (): JSX.Element => {
  const cart = getCart();
  const app = useApp();
  app?.setTitle('Cart');
  app?.setNavigationInfo('reset');
  app?.setFooterInfoText(_HomePageBottomBanner);
  console.log(cart);

  const [_reload, setReload] = React.useState(false);

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

  console.log(data);

  return (
    <section className={`container ${styles.split}`}>
      <ol>
        <li>
          <h2>Shipping Address</h2>
        </li>
      </ol>
      <section>
        <h2>Order Summary</h2>
        <ul className={styles.articles}>
          {cart.map((item) => {
            // Get article from data
            const article = data.articlesByIds.find((a) => a.id === item.id);
            if (!article) return null;

            // Get details
            const articleName = getDetail<string>(article.details, 'name');
            const articleImage = getDetail<string>(article.details, 'image');

            // Checks
            if (!checkArticle(article)) return null;
            if (!articleName) return null;
            if (!articleImage) return null;

            return (
              <li key={article.id} className={styles.article}>
                <img src={articleImage} alt={articleName} />
                <ol className={styles.article__details}>
                  <li>
                    <h3>{articleName}</h3>
                    <p>
                      {Math.round(article.price * item.quantity * 100) / 100}
                    </p>
                  </li>
                  <li>
                    <SelectComponent
                      defaultValue={item.quantity.toString()}
                      onChange={(value) => {
                        addToCart({
                          id: article.id,
                          quantity: parseInt(value),
                        });
                        reload();
                      }}
                      noMarginPlease={true}
                    />
                    <section>
                      <ButtonComponent
                        handleClick={(e) => {
                          const res = removeFromCart({ id: item.id });
                          reload(res.length < 1);
                        }}
                        icon={'/media/icons/trash.svg'}
                        noText={true}
                        type={'tertiary'}
                      >
                        Remove
                      </ButtonComponent>
                    </section>
                  </li>
                </ol>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};
