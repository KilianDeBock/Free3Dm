import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Link.module.css';

export const LinkComponent = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => (
  <Link
    to={`${link && link.split('')[0] === '/' ? link : '/' + link}`}
    className={`${styles.link}`}
  >
    {children}
  </Link>
);
