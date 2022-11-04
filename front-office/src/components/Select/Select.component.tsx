import React from 'react';
import styles from './Select.module.css';

export interface SelectProps {
  children?: React.ReactNode;
}

export const SelectComponent = ({ children }: SelectProps): JSX.Element => {
  const oneToTen = new Array(10).fill(0).map((_, i) => i + 1);

  return (
    <div className={styles.select}>
      <select className={styles.options} name="amount" id="amount">
        {(children && children) ||
          oneToTen.map((nr) => (
            <option key={nr} value={nr}>
              {nr}
            </option>
          ))}
      </select>
    </div>
  );
};
