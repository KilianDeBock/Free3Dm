import styles from './OrderSummary.module.css';
import { getDetail } from '@graphql';
import { SelectComponent } from '../Select/Select.component';
import { ButtonComponent } from '../Button/Button.component';
import React, { useEffect } from 'react';
import { checkArticle } from '../../constants/helpers/checkArticle';
import {
  addToCart,
  CartItem,
  removeFromCart,
} from '../../constants/helpers/cart';
import { ArticlesByIdsData } from '../../graphql/queries/articles';
import { _OrderSummaryTitle } from '@content/dialogs';

export interface OrderSummaryProps {
  cart: CartItem[];
  data: ArticlesByIdsData;
}

export const OrderSummaryComponent = ({
  cart,
  data,
}: OrderSummaryProps): JSX.Element => {
  const [_reload, setReload] = React.useState(false);

  const reload = (really: boolean = false) => {
    if (really) return window.location.reload();
    setReload(!_reload);
  };
  useEffect(() => {}, [_reload]);

  const VAT = 0.21;
  const shipping = 6.33;
  const discount = 0;
  let total = 0;

  return (
    <section className={styles.summary}>
      <h2>{_OrderSummaryTitle}</h2>
      <ul className={styles.articles}>
        {cart.map((item) => {
          // Get article from data
          const article = data.articlesByIds.find((a) => a.id === item.id);
          if (!article) return null;

          // Get details
          const articleName = getDetail<string>(article.details, 'name');
          const articleImage = getDetail<string>(article.details, 'image');
          const price = article.price * item.quantity;
          total += price;

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
                  <p>*${Math.round(price * 100) / 100}</p>
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
      <ol className={styles.total}>
        <li>
          <p>Subtotal</p>
          <p>${Math.round(total * 100) / 100}</p>
        </li>
        <li>
          <p>Discount</p>
          <p>-${Math.round(discount * 100) / 100}</p>
        </li>
        <li>
          <p>Shipping</p>
          <p>${Math.round(shipping * 100) / 100}</p>
        </li>
        <li>
          <p>VAT ({VAT * 100}%)</p>
          <p>${Math.round(total * VAT * 100) / 100}</p>
        </li>
        <li>
          <p>Total</p>
          <p>
            $
            {Math.round((total * VAT + total - discount + shipping) * 100) /
              100}
          </p>
        </li>
      </ol>
    </section>
  );
};
