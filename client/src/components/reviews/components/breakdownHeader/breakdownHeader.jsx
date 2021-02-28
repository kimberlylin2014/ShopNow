import React from 'react';
import styles from './breakdownHeader.css';
import AverageRating from '../averageRating/averageRating.jsx';
import StarRating from '../starRating/starRating.jsx';

const BreakdownHeader = () => (
  <div className={styles.breakdownHeader}>
    <AverageRating />
    <StarRating />
  </div>
);

export default BreakdownHeader;
