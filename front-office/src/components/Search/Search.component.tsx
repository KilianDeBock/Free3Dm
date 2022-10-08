import React from 'react';
import styles from './Search.module.css';

interface SearchProps {
  children?: React.ReactNode;
  placeholderTxt: string;
  submitTxt: string;
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  location.reload();
};

export const SearchComponent = ({
  children,
  placeholderTxt,
  submitTxt,
  handleSubmit = defaultSubmit,
  handleChange = () => {},
}: SearchProps) => {
  const searchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTimeout(() => handleSubmit(event), 500);
  };
  return (
    <form onSubmit={searchSubmit} className={styles.search}>
      {children}
      <input
        className={styles.input}
        onChange={handleChange}
        type="text"
        placeholder={placeholderTxt}
      />
      <button className={styles.submit} type="submit">
        {submitTxt}
      </button>
    </form>
  );
};
