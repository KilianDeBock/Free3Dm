import navigationStyles from '../Header/Navigation.module.css';
import { LinkComponent } from '../Link/Link.component';
import React from 'react';

interface NavigationProps {
  categories: string[];
}

export const NavigationComponent = ({ categories }: NavigationProps) => (
  <nav className={navigationStyles.navigation}>
    <ul className={`container ${navigationStyles['navigation__container']}`}>
      {categories.map((category, i) => (
        <li key={i}>
          <LinkComponent
            noHover={true}
            link={`/category/${category.toLowerCase()}`}
          >
            {category}
          </LinkComponent>
        </li>
      ))}
    </ul>
  </nav>
);
