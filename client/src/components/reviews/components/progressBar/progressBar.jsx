import React from 'react';
import styles from './progressBar.css';

const ProgressBar = ({percentRating}) => (
  <div className={styles.progressFrame}>
    <div className={styles.progressBar} style={{height: '15px', width: `${percentRating}%`}}></div>
  </div>
);

export default ProgressBar;
