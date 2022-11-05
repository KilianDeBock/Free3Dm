import { ContentCardComponent } from '../ContentCard/ContentCard.component';
import React, { useState } from 'react';
import { getDetail, Product } from 'src/graphql';
import { checkArticle } from '../../constants/helpers/checkArticle';

export interface ReviewsProps {
  product: Product;
}

export const ReviewsComponent = ({ product }: ReviewsProps) => {
  const [isOpen, setIsOpen] = useState(0);

  let reviews = product?.articles
    ?.map((a, ai) =>
      a?.reviews?.map((r, ri) => {
        if (!checkArticle(a)) return;
        if (!a?.details) return;
        const noteDetail = getDetail(a.details, 'name');
        if (!noteDetail) return;

        const note = `placed on ${noteDetail}`;

        const id = parseInt(`${++ai}${++ri}`);
        return (
          <ContentCardComponent
            key={id}
            id={id}
            image={'/media/images/default.png'}
            name={r.customer?.firstName}
            note={note}
            stars={r.stars}
            list={true}
            children={r.review}
            onExpand={(e) => setIsOpen(e)}
            openId={isOpen}
          />
        );
      })
    )
    .flat();

  if (!reviews || reviews?.length < 1)
    reviews = [
      <ContentCardComponent
        image={'/media/images/default.png'}
        name={'No reviews'}
        stars={0}
        list={true}
        children={'Be the first to review this product!'}
      />,
    ];

  return <ul>{reviews}</ul>;
};
