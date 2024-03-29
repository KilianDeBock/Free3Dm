import React from 'react';
import {
  NavigationComponent,
  SearchComponent,
  SecondaryNavigationComponent,
  SecondaryNavigationLink,
  TertiaryNavigationComponent,
  TertiaryNavigationLink,
} from '../';
import styles from './Header.module.css';
import bannerStyles from './Banner.module.css';
import { CONSTS } from '../../constants';
import {
  _3DPrintersButton,
  _BusinessProductsButton,
  _FilamentsButton,
  _ResinButton,
  _SearchButton,
  _ShoppingCartButton,
  _SignInButton,
  _ToysButton,
  _WishlistButton,
} from '@content/buttons';
import {
  _EmailAddress,
  _PhoneNumberBE,
  _PhoneNumberCA,
  _SearchBar,
} from '@content/dialogs';
import { _TertiaryNavigation } from '@content/main/header';
import { useNavigate } from 'react-router-dom';

const primaryNavCategories: string[] = [
  _3DPrintersButton,
  _FilamentsButton,
  _ResinButton,
  _ToysButton,
  _BusinessProductsButton,
];

const secondaryNavLinks: SecondaryNavigationLink[] = [
  {
    link: '/wishlist',
    label: _WishlistButton,
  },
  {
    link: '/login',
    label: _SignInButton,
  },
  {
    link: '/cart',
    label: _ShoppingCartButton,
    button: true,
    icon: '/media/icons/cart.svg',
  },
];

const tertiaryNavLinks: TertiaryNavigationLink[] = [
  {
    link: `tel:${_PhoneNumberCA}`,
    label: _PhoneNumberCA,
  },
  {
    link: `tel:${_PhoneNumberBE}`,
    label: _PhoneNumberBE,
  },
  {
    link: `mailto:${_EmailAddress}`,
    label: _EmailAddress,
  },
  {
    link: _TertiaryNavigation.split('\n')[2],
    label: _TertiaryNavigation.split('\n')[2],
    copy: true,
  },
];

export const HeaderComponent = () => {
  const navigate = useNavigate();
  const [_search, setSearch] = React.useState('');

  const search = (event: React.FormEvent<HTMLFormElement>) => {
    navigate(`/search/${_search}`);
  };

  return (
    <header className={styles.header}>
      <div className={bannerStyles.banner}>
        <div className={`container ${bannerStyles.banner__text}`}></div>
      </div>
      <TertiaryNavigationComponent links={tertiaryNavLinks} />
      <SecondaryNavigationComponent
        appName={CONSTS.APP_NAME}
        links={secondaryNavLinks}
      />
      <section id={'step_3'} className={`container ${styles.search}`}>
        <SearchComponent
          submitTxt={[
            _SearchButton.split('\n')[0],
            _SearchButton.split('\n')[1],
          ]}
          placeholderTxt={_SearchBar}
          handleSubmit={search}
          handleChange={(e) => setSearch(e.target.value)}
        />
      </section>
      <NavigationComponent categories={primaryNavCategories} />
    </header>
  );
};
