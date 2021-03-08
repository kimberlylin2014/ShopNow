import React from 'react';
import styles from './body.css';

const ReviewBody = ({body}) => (
  <div className={styles.body}>
    <span className={styles.bodyText}>{body}</span>
  </div>
);

export default ReviewBody;