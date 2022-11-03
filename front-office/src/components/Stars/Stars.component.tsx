import React from 'react';
import styles from './Stars.module.css';

export interface StarsProps {
  children?: React.ReactNode;
  rating: number;
}

export const StarsComponent = ({
  children,
  rating,
}: StarsProps): JSX.Element => {
  // Get received stars
  const received = new Array(Math.round(rating)).fill(true);

  // Generate the stars array
  const stars = new Array(5).fill(0).map((_, i) => {
    // Convert our 10 stars input to 5 stars rating.
    const index = i * 2;
    // Get next index to check against.
    const nextIndex = index + 1;

    // Check if the received array has ended
    if (nextIndex <= rating) {
      // Is the next item there? Return half star
      if (received[index] && !received[nextIndex]) return 1;
      // Are both there, return full star
      if (received[index] && received[nextIndex]) return 2;
    }
    // Return empty star
    return 0;
  });

  // Set the info text (based on index as used above)
  const starInfo = ['Empty star', 'Half star', 'Full star'];

  // Return the stars styling
  return (
    <ol className={styles.stars}>
      {stars.map((s, i) => (
        <li key={i} className={styles['stars__item']} data-stars={s}>
          {starInfo[s]}
        </li>
      ))}
      {children && (
        <li key={6} className={styles['stars__info']}>
          {children}
        </li>
      )}
    </ol>
  );
};
