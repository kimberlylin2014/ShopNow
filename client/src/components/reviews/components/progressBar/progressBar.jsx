import React from 'react';
import styles from './progressBar.css';

const ProgressBar = ({percentRating}) => (
  <div className={styles.progressFrame}>
    <div className={styles.progressBar} style={{height: '25px', width: `${percentRating}%`}}></div>
  </div>
);

export default ProgressBar;
