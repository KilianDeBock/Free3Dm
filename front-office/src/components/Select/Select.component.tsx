import React from 'react';
import styles from './Select.module.css';

export interface SelectProps {
  children?: React.ReactNode;
  onChange?: (value: string) => void;
  defaultValue?: string;
  noMarginPlease?: boolean;
}

export const SelectComponent = ({
  children,
  onChange,
  defaultValue = '',
  noMarginPlease = false,
}: SelectProps): JSX.Element => {
  const oneToTen = new Array(10).fill(0).map((_, i) => i + 1);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e.target.value);
  };

  return (
    <div
      className={`
        ${styles.select}
        ${noMarginPlease ? styles['no-margin'] : ''}
      `}
    >
      <select
        className={styles.options}
        name="amount"
        id="amount"
        onChange={handleChange}
        defaultValue={defaultValue}
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
