import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Link.module.css';

interface LinkProps {
  children: React.ReactNode;
  link: string;
  noHover?: boolean;
  href?: boolean;
  newTab?: boolean;
  copy?: boolean;
  icon?: string | null;
  noText?: boolean;
}

export const LinkCheck = (link: string): string => {
  return link.split('')[0] === '/' ? link : '/' + link;
};

export const LinkComponent = ({
  children,
  link,
  noHover = false,
  href = false,
  newTab = false,
  copy = false,
  icon = null,
  noText = false,
}: LinkProps) => {
  const copyLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    navigator.clipboard.writeText(link);
  };

  return href || copy || newTab ? (
    <a
      onClick={(ev) => copy && copyLink(ev)}
      href={link}
      target={newTab ? '_blank' : '_self'}
      className={`${styles.link} ${!noHover && styles.hover} ${
        icon && styles['link__icon']
      } ${noText && styles['link__no-text']}`}
    >
      {icon && (
        <img
          className={styles['link__icon__image']}
          src={icon}
          alt={`Icon for url: "${link}"`}
        />
      )}
      {children}
    </a>
  ) : (
    <Link
      to={LinkCheck(link)}
      className={`${styles.link} ${!noHover && styles.hover}`}
    >
      {children}
    </Link>
  );
};
