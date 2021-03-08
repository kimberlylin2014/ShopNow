import React from 'react';
import styles from './iRecommend.css';

const IRecommend = ({review}) => (
  <div className={styles.iRecommend}>
    {review.recommend ? (
      <img
      className={styles.iRecommendImg}
      src="/icons/check.png"
      alt="green-checkmark"
      />
    ): null}

    <span className={styles.iRecommendText}>{review.recommend ? 'I recommend this product' : null }</span>
  </div>
);

export default IRecommend;