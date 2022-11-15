import React from 'react';
import {
  CenterBoxComponent,
  ImageCardGroupComponent,
  ImageCardProps,
  ImageComponent,
} from '../../components';
import { useApp } from '../../contexts';
import { _NewTo3DPrinting, _NewTo3DPrintingTitle } from '@content/main/promos';
import { _HomePageBottomBanner } from '@content/main/footer';

import 'intro.js/introjs.css';

const heading = {
  text: {
    title: _NewTo3DPrintingTitle,
    text: _NewTo3DPrinting,
  },
  image: {
    image: '/media/images/printers-printing.jpg',
    alt: 'Printers working.',
  },
};

const featuredArticles: ImageCardProps[] = [
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

const recommendedArticles: ImageCardProps[] = [
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
  app?.setFooterInfoText(_HomePageBottomBanner);

  return (
    <>
      <CenterBoxComponent title={heading.text.title} text={heading.text.text} />
      <ImageComponent
        image={heading.image.image}
        alt={heading.image.alt}
        nice={true}
      />
      <ImageCardGroupComponent
        cards={featuredArticles}
        title={'Featured Products'}
      />
      <ImageCardGroupComponent
        cards={recommendedArticles}
        title={'Recommended For You'}
      />
    </>
  );
};
