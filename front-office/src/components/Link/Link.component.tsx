import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Link.module.css';

interface LinkProps {
  children: React.ReactNode;
  link: string;
  noHover?: boolean;
  href?: boolean;
  copy?: boolean;
}

export const LinkCheck = (link: string): string => {
  return link.split('')[0] === '/' ? link : '/' + link;
};

export const LinkComponent = ({
  children,
  link,
  noHover = false,
  href = false,
  copy = false,
}: LinkProps) => {
  const copyLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    navigator.clipboard.writeText(link);
  };

  return href || copy ? (
    <a
      onClick={(ev) => copy && copyLink(ev)}
      href={link}
      className={`${styles.link} ${!noHover && styles.hover}`}
    >
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
