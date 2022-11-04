import React from 'react';
import styles from './Select.module.css';

export interface SelectProps {
  children?: React.ReactNode;
  onChange?: (value: string) => void;
}

export const SelectComponent = ({
  children,
  onChange,
}: SelectProps): JSX.Element => {
  const oneToTen = new Array(10).fill(0).map((_, i) => i + 1);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e.target.value);
  };

  return (
    <div className={styles.select}>
      <select
        className={styles.options}
        name="amount"
        id="amount"
        onChange={handleChange}
      >
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
