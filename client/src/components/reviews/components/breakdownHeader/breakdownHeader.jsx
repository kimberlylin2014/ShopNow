import React from 'react';
import styles from './breakdownHeader.css';
import AverageRating from '../averageRating/averageRating.jsx';
import Stars from '../../../Stars.jsx';
import { calculateAverageRating } from '../../utils/rating.js';

const BreakdownHeader = ({metaReview, totalReviews, averageRating}) => {
  // let rating = null;
  // if (metaReview) {
  //   rating = calculateAverageRating(metaReview.ratings);
  // }
  return (
    <div className={styles.breakdownHeader}>
      {totalReviews ? (<AverageRating rating={averageRating} />) : null}

      <Stars numStars={averageRating} starsClass={styles.starsClass} />
      &nbsp;({totalReviews} reviews)
    </div>
  );
};

export default BreakdownHeader;
