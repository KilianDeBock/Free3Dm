import React from 'react';
import { Category, getDetail } from '@graphql';
import { CardComponent } from '../Card/Card.component';
import styles from './CategoryProducts.module.css';

export interface CardProps {
  category: Category;
}

export const CategoryProductsComponent = ({
  category: { products },
}: CardProps) => (
  <>
    {products && (
      <ul className={styles['category__items']}>
        {products?.map(({ articles, name }) =>
          articles?.map(({ details, id, price: p }) => {
            // Check if the required image details is available.
            const hasImage = details?.find(({ key }) => key === 'image');

            // Check if we have an image and detail(s).
            if (!details || !hasImage || details.length < 1) return;

            // Get variables for the card component.
            const image = getDetail<string>(details, 'image') || '/';
            const title = getDetail<string>(details, 'name') || name;
            const price = p.toString() || 'Unknown';

            // Merge them into a single object.
            const props = { image, title, alt: title, price };

            // Return the card component.
            return (
              <li key={id}>
                <CardComponent {...props} />
              </li>
            );
          })
        )}
      </ul>
    )}
  </>
);
