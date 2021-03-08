import React from 'react';
import styles from './breakdownOneCharacteristic.css';

const BreakdownOneCharacteristic = ({name, value, totalReviews}) => (
  <div className={styles.breakdownOneCharacteristic}>
    {name}: {totalReviews ? value : ''}
  </div>
);

export default BreakdownOneCharacteristic;
