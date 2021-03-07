import React from 'react';
import styles from './summary.css';

const Summary = ({summary}) => (
  <div className={styles.summary}>
    <span className={styles.boldSummary}>{summary}</span>
  </div>
);

export default Summary;