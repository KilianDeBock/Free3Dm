import React, { useEffect } from 'react';
import { CenterBoxComponent, ImageComponent } from '../../components';

const heading = {
  text: {
    title: 'Start Printing now!',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  },
  image: {
    image: '/media/images/printers-printing.jpg',
    alt: 'Printers working.',
  },
};

export const HomePage = (): JSX.Element => {
  useEffect(() => {
    document.title = 'Home - Free3Dm';
  });

  return (
    <>
      <CenterBoxComponent title={heading.text.title} text={heading.text.text} />
      <ImageComponent
        image={heading.image.image}
        alt={heading.image.alt}
        nice={true}
      />
    </>
  );
};
