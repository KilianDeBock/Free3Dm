import React from 'react';
import styles from './List.module.css';

export interface ListProps {
  children: React.ReactNode;
  ordered?: boolean;
}

export const ListComponent = ({
  children,
  ordered,
}: ListProps): JSX.Element => {
  return (
    <>
      {ordered ? (
        <ol className={styles.list}>{children}</ol>
      ) : (
        <ul className={styles.list}>{children}</ul>
      )}
    </>
  );
};
