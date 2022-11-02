import React from 'react';
import {
  CardGroupComponent,
  CardProps,
  CenterBoxComponent,
  ImageComponent,
} from '../../components';
import { useApp } from '../../contexts';

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

const featuredArticles: CardProps[] = [
  {
    image: '/media/images/001 - FDM Printer.jpg',
    alt: '3D Printer',
    title: 'Black .75 FDM Filament',
    price: '$198.00',
  },
  {
    image: '/media/images/002 - Resin Printer.jpg',
    alt: '3D Printer',
    title: '3D Printer',
    price: '$412.00',
  },
  {
    image: '/media/images/101 - Black.jpg',
    alt: '3D Printer',
    title: '3D Printer',
    price: '$32.00',
  },
];

const recommendedArticles: CardProps[] = [
  {
    image: '/media/images/101 - Black.jpg',
    alt: '3D Printer',
    title: 'Black .75 FDM Filament',
    price: '$32.00',
  },
  {
    image: '/media/images/102 - Gray.jpg',
    alt: '3D Printer',
    title: 'Black .75 FDM Filament',
    price: '$32.00',
  },
  {
    image: '/media/images/103 - Light Gray.jpg',
    alt: '3D Printer',
    title: 'Black .75 FDM Filament',
    price: '$32.00',
  },
];

export const HomePage = (): JSX.Element => {
  const app = useApp();
  app?.setTitle('Home');
  app?.setNavigationInfo('reset', '');

  return (
    <>
      <CenterBoxComponent title={heading.text.title} text={heading.text.text} />
      <ImageComponent
        image={heading.image.image}
        alt={heading.image.alt}
        nice={true}
      />
      <CardGroupComponent
        cards={featuredArticles}
        title={'Featured Products'}
      />
      <CardGroupComponent
        cards={recommendedArticles}
        title={'Recommended For You'}
      />
    </>
  );
};
