import React from 'react';
import styles from './breakdownHeader.css';
import AverageRating from '../averageRating/averageRating.jsx';
import Stars from '../../../Stars.jsx';

const BreakdownHeader = ({ totalReviews, averageRating}) => (
  <div className={styles.breakdownHeader}>
    {totalReviews ? <AverageRating rating={averageRating} /> : null}
    <Stars numStars={averageRating} starsClass={styles.starsClass} />
    &nbsp;
    {`(${totalReviews} Reviews)`}
  </div>
);

export default BreakdownHeader;
