import React from 'react';
import { SearchComponent } from '../../components';
import styles from './Header.module.css';
import bannerStyles from './Banner.module.css';
import { NavigationComponent } from '../';
import {
  TertiaryNavigationComponent,
  TertiaryNavigationLink,
} from '../Navigation/TertiaryNavigation.component';
import {
  SecondaryNavigationComponent,
  SecondaryNavigationLink,
} from '../Navigation/SecondaryNavigation.component';
import { CONSTS } from '../../constants/consts';

const primaryNavCategories: string[] = [
  'Printers',
  'Filament',
  'Resin',
  'Toys',
  'Upgrades',
];

const secondaryNavLinks: SecondaryNavigationLink[] = [
  {
    link: 'wishlist',
    label: 'my wishlist',
  },
  {
    link: 'login',
    label: 'sign in',
  },
  {
    link: 'cart',
    label: 'my cart',
    button: true,
    icon: '/media/icons/cart.svg',
  },
];

const tertiaryNavLinks: TertiaryNavigationLink[] = [
  {
    link: 'tel:+3200000000',
    label: '+3200 000 000',
  },
  {
    link: 'mailto:info@Free3Dm.org',
    label: 'info@Free3Dm.org',
  },
  {
    link: 'BE00 000 000 000',
    label: 'BE00 000 000 000',
    copy: true,
  },
];

export const HeaderComponent = () => (
  <header className={styles.header}>
    <div className={bannerStyles.banner}>
      <div className={`container ${bannerStyles.banner__text}`}></div>
    </div>
    <TertiaryNavigationComponent links={tertiaryNavLinks} />
    <SecondaryNavigationComponent
      appName={CONSTS.APP_NAME}
      links={secondaryNavLinks}
    />
    <section className={styles.search}>
      <SearchComponent
        submitTxt="GO!"
        placeholderTxt="What are you looking for?"
      />
    </section>
    <NavigationComponent categories={primaryNavCategories} />
  </header>
);
