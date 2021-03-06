import React from 'react';
import styles from './progressBar.css';

const ProgressBar = () => (
  <div className={styles.progressFrame}>
    <div className={styles.progressBar} style={{height: '15px', width: '20%'}}></div>
  </div>
);

export default ProgressBar;
