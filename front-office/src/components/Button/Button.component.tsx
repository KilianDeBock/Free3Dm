import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const handlePosition = (position: string): string => {
  let style = '';
  switch (position) {
    case 'left':
      style = styles.button_left;
      break;
    case 'center':
      style = styles.button_center;
      break;
    case 'right':
      style = styles.button_right;
      break;
    default:
      break;
  }
  return style;
};
const handleSize = (size: string): string => {
  let style = '';
  switch (size) {
    case 'large':
      style = styles.button_lg;
      break;
    case 'small':
      style = styles.button_small;
      break;
    case 'xs':
      style = styles.button_xs;
      break;
    default:
      break;
  }
  return style;
};

export const ButtonComponent = ({
  children,
  type,
  size,
  handleClick,
  position,
  link,
}: {
  children: React.ReactNode;
  type: string;
  size: string;
  handleClick: string;
  position: string;
  link: string;
}) =>
  !link ? (
    <button
      className={`${styles.button} 
      ${size && handleSize(size)} 
      ${type === 'secondary' && styles.button_secondary} 
      ${type === 'tertiary' && styles.button_tertiary}
      ${position && handlePosition(position)}`}
      onClick={(e) => {}}
    >
      {children}
    </button>
  ) : (
    <Link
      to={`/${link}`}
      className={`${styles.button} ${size && handleSize(size)} ${
        type === 'secondary' && styles.button_secondary
      } ${type === 'tertiary' && styles.button_tertiary}
    ${position && handlePosition(position)}`}
    >
      {children}
    </Link>
  );
