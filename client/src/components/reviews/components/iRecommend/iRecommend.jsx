import React from 'react';
import styles from './iRecommend.css';

const IRecommend = ({review}) => (
  <div className={styles.iRecommend}>
    <img
      className={styles.iRecommendImg}
      src="/icons/check.png"
      alt="green-checkmark"
    />
    <span className={styles.iRecommendText}>{review.recommend ? 'I recommend this product' : null }</span>
  </div>
);

export default IRecommend;