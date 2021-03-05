import React from 'react';
import styles from './averageRating.css';

const AverageRating = ({rating}) => (
  <span className={styles.averageRating}>{rating}</span>
);

export default AverageRating;
