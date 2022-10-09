import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import { LinkCheck } from '../Link/Link.component';

type ButtonType = 'primary' | 'secondary' | 'tertiary';
type clickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

interface ButtonProps {
  children: React.ReactNode;
  type: ButtonType;
  handleClick?: (event: clickEvent) => void | Promise<void>;
  link?: string;
  icon?: string | null;
}

const getType = (type: ButtonType = 'tertiary'): string => {
  switch (type) {
    case 'primary':
      return styles['button--primary'];
    case 'secondary':
      return styles['button--secondary'];
    default:
      return styles['button--tertiary'];
  }
};

export const ButtonComponent = ({
  children,
  type,
  handleClick,
  link,
  icon = null,
}: ButtonProps) =>
  !link ? (
    <button
      className={`${styles.button} ${getType(type)} ${
        icon && styles['button__icon']
      }`}
      onClick={(e) => handleClick && handleClick(e)}
    >
      {icon && (
        <img
          className={styles['button__icon__image']}
          src={icon}
          alt={`Icon`}
        />
      )}
      {children}
    </button>
  ) : (
    <Link
      className={`${styles.button} ${getType(type)} ${
        icon && styles['button__icon']
      }`}
      to={LinkCheck(link)}
    >
      {icon && (
        <img
          className={styles['button__icon__image']}
          src={icon}
          alt={`Icon`}
        />
      )}
      {children}
    </Link>
  );
