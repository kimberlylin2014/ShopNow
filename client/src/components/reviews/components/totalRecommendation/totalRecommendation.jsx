import React from 'react';
import styles from './totalRecommendation.css';

const TotalRecommendation = ({numOfRecommendation, totalReviews}) => (
  <p className={styles.totalRecommendation}>
    {totalReviews ? numOfRecommendation : 0}
    % of reviews recommend this product
  </p>
);

export default TotalRecommendation;