import { LinkComponent } from '../Link/Link.component';
import React from 'react';
import secondaryNavigationStyles from './SecondaryNavigation.module.css';
import { ButtonComponent } from '../Button/Button.component';

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
    <li className={secondaryNavigationStyles['navigation__home']}>
      <LinkComponent link="/">{appName}</LinkComponent>
    </li>
    <li>
      <ul className={secondaryNavigationStyles['navigation__sub-navigation']}>
        {links.map((link, i) => (
          <li key={i}>
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