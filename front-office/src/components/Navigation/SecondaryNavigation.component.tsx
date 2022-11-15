import { ButtonComponent, LinkComponent } from '../';
import React from 'react';
import secondaryNavigationStyles from './SecondaryNavigation.module.css';
import {
  _ShoppingCartButton,
  _SignInButton,
  _WishlistButton,
} from '@content/buttons';

export interface SecondaryNavigationLink {
  link: string;
  label: string;
  button?: boolean;
  icon?: string;
}

export interface SecondaryNavigationProps {
  appName: string;
  links: SecondaryNavigationLink[];
}

export const SecondaryNavigationComponent = ({
  appName,
  links,
}: SecondaryNavigationProps) => (
  <ul className={`container ${secondaryNavigationStyles.navigation}`}>
    <li id={'step_1'} className={secondaryNavigationStyles['navigation__home']}>
      <LinkComponent link="/">{appName}</LinkComponent>
    </li>
    <li>
      <ul className={secondaryNavigationStyles['navigation__sub-navigation']}>
        {links.map((link, i) => (
          <li
            className={`
              ${link.label === _WishlistButton ? 'step_wishlist' : ''}
              ${link.label === _ShoppingCartButton ? 'step_cart' : ''}
              ${link.label === _SignInButton ? 'step_login' : ''}
            `}
            key={i}
          >
            {link?.button ? (
              <ButtonComponent
                type="secondary"
                link={link.link}
                icon={link?.icon ? link?.icon : null}
              >
                {link.label}
              </ButtonComponent>
            ) : (
              <LinkComponent link={link.link}>{link.label}</LinkComponent>
            )}
          </li>
        ))}
      </ul>
    </li>
  </ul>
);
