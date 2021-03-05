import React from 'react';
import styles from './breakdownHeader.css';
import AverageRating from '../averageRating/averageRating.jsx';
import Stars from '../../../Stars.jsx';
import { calculateAverageRating } from '../../utils/rating.js';

const BreakdownHeader = ({metaReview}) => {
  let rating = null;
  if (metaReview) {
    rating = calculateAverageRating(metaReview.ratings);
  }
  return (
    <div className={styles.breakdownHeader}>
      <AverageRating rating={rating} />
      <Stars numStars={rating} />
    </div>
  );
};

export default BreakdownHeader;
