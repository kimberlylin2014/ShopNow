import React from 'react';
import styles from './totalRecommendation.css';

const TotalRecommendation = ({numOfRecommendation}) => (
  <p className={styles.totalRecommendation}>
    {numOfRecommendation}
    % of reviews recommend this product
  </p>
);

export default TotalRecommendation;