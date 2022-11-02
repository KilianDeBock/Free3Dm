import navigationStyles from './Navigation.module.css';
import { LinkComponent } from '../';
import React, { useState } from 'react';
import { useApp } from '../../contexts';

interface NavigationProps {
  categories: string[];
}

export const NavigationComponent = ({ categories }: NavigationProps) => {
  const [updated, _update] = useState(false);
  const update = () => _update(!updated);

  const app = useApp();
  const { path, text } = app?.navigationInfo ?? {};
  app?.setNavigationUpdate(update);

  return (
    <section className={`container ${navigationStyles.navigation__group}`}>
      <nav className={navigationStyles.navigation}>
        <ul className={`${navigationStyles['navigation__container']}`}>
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
      <ul className={navigationStyles['navigation__page-info']}>
        <li>
          {(path?.length ?? 0) > 1 && (
            <ol className={navigationStyles['navigation__path']}>
              {path?.map((path, i) => (
                <li key={i}>
                  <LinkComponent noHover={true} link={path[1]}>
                    {path[0]}
                  </LinkComponent>
                </li>
              ))}
            </ol>
          )}
        </li>
        <li>{text}</li>
      </ul>
    </section>
  );
};
