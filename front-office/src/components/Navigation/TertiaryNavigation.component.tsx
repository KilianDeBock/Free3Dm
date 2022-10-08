import { LinkComponent } from '../Link/Link.component';
import React from 'react';
import TertiaryNavigationStyles from '../Header/TertiaryNavigation.module.css';

export interface TertiaryNavigationLink {
  link: string;
  label: string;
  copy?: boolean;
}

export interface TertiaryNavigationProps {
  links: TertiaryNavigationLink[];
}

export const TertiaryNavigationComponent = ({
  links,
}: TertiaryNavigationProps) => (
  <ul className={`container ${TertiaryNavigationStyles.navigation}`}>
    {links.map((link, i) => (
      <li key={i}>
        <LinkComponent link={link.link} href={true} copy={link?.copy}>
          {link.label}
        </LinkComponent>
      </li>
    ))}
  </ul>
);
