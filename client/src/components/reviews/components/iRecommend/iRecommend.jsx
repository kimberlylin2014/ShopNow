import React from 'react';
import styles from './iRecommend.css';

const IRecommend = ({review}) => (
  <div className={styles.iRecommend}>
    <img
      className={styles.iRecommendImg}
      src="/icons/tick.png"
      alt="green-checkmark"
    />
    {review.recommend ? 'I recommend this product' : null }
  </div>
);

export default IRecommend;