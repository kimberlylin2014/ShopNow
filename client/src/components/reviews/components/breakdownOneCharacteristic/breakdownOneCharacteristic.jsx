import React from 'react';
import styles from './breakdownOneCharacteristic.css';

const BreakdownOneCharacteristic = ({name, value}) => (
  <div className={styles.breakdownOneCharacteristic}>
    {name}:
    {value}
  </div>
);

export default BreakdownOneCharacteristic;
