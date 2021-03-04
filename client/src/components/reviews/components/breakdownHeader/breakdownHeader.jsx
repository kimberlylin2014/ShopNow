import React from 'react';
import styles from './breakdownHeader.css';
import AverageRating from '../averageRating/averageRating.jsx';
import StarRating from '../starRating/starRating.jsx';

const BreakdownHeader = ({metaReview}) => (
  <div className={styles.breakdownHeader}>
    <AverageRating metaReview={metaReview}/>
    <StarRating />
  </div>
);

export default BreakdownHeader;
