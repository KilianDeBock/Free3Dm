import React from 'react';
import styles from './Stars.module.css';
import { Article } from 'backend/dist/articles/entities/article.entity';

export interface StarsProps {
  children?: React.ReactNode;
  rating: number;
}

export interface StarsRawResult {
  totalReviews: number;
  totalStars: number;
  receivedStars: number;
}

export interface StarsResult {
  stars: number;
  rating: number;
}

export type GetStarsResult = [StarsResult, StarsRawResult];

export const getStars = (
  articles: Article[] = [],
  article: Article | null = null
): GetStarsResult => {
  const _articles = !article ? articles : [article];
  const _rawResults: StarsRawResult = {
    totalStars: 0,
    receivedStars: 0,
    totalReviews: 0,
  };
  const rawResults: StarsRawResult =
    _articles?.reduce((acc, inc) => {
      let totalStars = 0;
      let receivedStars = 0;
      let totalReviews = 0;
      inc?.reviews?.forEach((review) => {
        totalStars += 5;
        receivedStars += review.stars;
        totalReviews++;
      });

      acc.totalStars += totalStars;
      acc.receivedStars += receivedStars;
      acc.totalReviews += totalReviews;

      return acc;
    }, _rawResults) ?? _rawResults;

  // Create shortnames for raw results
  const got = rawResults.receivedStars;
  const tot = rawResults.totalStars;

  // Calculate stars and rating
  const stars = Math.round((got / tot) * 5 * 10) / 10 || 0;
  const rating = Math.round((got / tot) * 10) || 0;

  // Create result object
  const starsResult = { stars, rating };

  // Return all results
  return [starsResult, rawResults];
};

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
