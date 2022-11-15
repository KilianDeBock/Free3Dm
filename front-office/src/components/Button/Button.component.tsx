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
  addClass?: string;
  icon?: string | null;
  noText?: boolean;
  noAnimation?: boolean;
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
  addClass = '',
  icon = null,
  noText = false,
  noAnimation = false,
}: ButtonProps) =>
  !link ? (
    <button
      className={`
        ${addClass}
        ${styles.button} 
        ${getType(type)} 
        ${icon && styles['button__icon']}
        ${noText && styles['button__no-text']}
        ${noAnimation && styles['button__no-animation']}
      `}
      onClick={(e) => handleClick && handleClick(e)}
    >
      {icon && (
        <img
          className={styles['button__icon__image']}
          src={icon}
          alt={children?.toString()}
        />
      )}
      {children}
    </button>
  ) : (
    <Link
      className={`
        ${addClass}
        ${styles.button} 
        ${getType(type)} 
        ${icon && styles['button__icon']}
      `}
      to={LinkCheck(link)}
    >
      {icon && (
        <img
          className={styles['button__icon__image']}
          src={icon}
          alt={children?.toString()}
        />
      )}
      {children}
    </Link>
  );
