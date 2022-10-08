import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  ButtonComponent,
  LinkComponent,
  SearchComponent,
} from '../../components';
import './Inital/reset.css';
import './Inital/defaults.css';
import './Inital/eggs.css';
import styles from './Base.module.css';
import TertiaryNavigationStyles from './Header/TertiaryNavigation.module.css';
import secondaryNavigationStyles from './Header/SecondaryNavigation.module.css';
import navigationStyles from './Header/Navigation.module.css';
import bannerStyles from './Header/Banner.module.css';

const BaseLayout = () => (
  <>
    <header className={styles.header}>
      <div className={bannerStyles.banner}>
        <div className={`container ${bannerStyles.banner__text}`}></div>
      </div>
      <ul className={`container ${TertiaryNavigationStyles.navigation}`}>
        <li>
          <LinkComponent link="tel:+3200000000" href={true}>
            +3200 000 000
          </LinkComponent>
        </li>
        <li>
          <LinkComponent link="mailto:ingo@Free3Dm.org" href={true}>
            ingo@Free3Dm.org
          </LinkComponent>
        </li>
        <li>
          <LinkComponent link="BE00 000 000 000" copy={true}>
            BE00 000 000 000
          </LinkComponent>
        </li>
      </ul>
      <ul className={`container ${secondaryNavigationStyles.navigation}`}>
        <li className={secondaryNavigationStyles['navigation__home']}>
          <LinkComponent link="/">Free3Dm</LinkComponent>
        </li>
        <li>
          <ul
            className={secondaryNavigationStyles['navigation__sub-navigation']}
          >
            <li>
              <LinkComponent link="/wishlist">my wishlist</LinkComponent>
            </li>
            <li>
              <LinkComponent link="/login">sign in</LinkComponent>
            </li>
            <li>
              <ButtonComponent type="secondary" link="/cart">
                my Cart
              </ButtonComponent>
            </li>
          </ul>
        </li>
      </ul>
      <section className={styles.search}>
        <SearchComponent
          submitTxt="GO!"
          placeholderTxt="What are you looking for?"
        />
      </section>
      <nav className={navigationStyles.navigation}>
        <ul
          className={`container ${navigationStyles['navigation__container']}`}
        >
          <li>
            <LinkComponent noHover={true} link="/category/printers">
              Printers
            </LinkComponent>
          </li>
          <li>
            <LinkComponent noHover={true} link="/category/filament">
              Filament
            </LinkComponent>
          </li>
          <li>
            <LinkComponent noHover={true} link="/category/resin">
              Resin
            </LinkComponent>
          </li>
          <li>
            <LinkComponent noHover={true} link="/category/toys">
              Toys
            </LinkComponent>
          </li>
          <li>
            <LinkComponent noHover={true} link="/category/upgrades">
              Upgrades
            </LinkComponent>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
    <footer>Footer</footer>
  </>
);

export default BaseLayout;
