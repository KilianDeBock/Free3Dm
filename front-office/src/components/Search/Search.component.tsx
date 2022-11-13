import React from 'react';
import styles from './Search.module.css';

interface SearchProps {
  children?: React.ReactNode;
  placeholderTxt: string;
  submitTxt: [string, string] | string;
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
  const initialText = Array.isArray(submitTxt) ? submitTxt[0] : submitTxt;
  const [searchText, setSearchText] = React.useState(initialText);
  const searchRef = React.useRef<HTMLFormElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const searchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRef.current?.classList.add(styles.active);
    setTimeout(
      () => setSearchText(Array.isArray(submitTxt) ? submitTxt[1] : submitTxt),
      300
    );
    setTimeout(() => {
      handleSubmit(event);
      setTimeout(() => {
        searchRef.current?.classList.remove(styles.active);
        setSearchText(initialText);
      }, 200);
    }, 500);
  };
  return (
    <form ref={searchRef} onSubmit={searchSubmit} className={styles.search}>
      {children}
      <input
        ref={inputRef}
        className={styles.input}
        onChange={handleChange}
        type="text"
        placeholder={placeholderTxt}
      />
      <button className={styles.submit} type="submit">
        {searchText}
      </button>
    </form>
  );
};
