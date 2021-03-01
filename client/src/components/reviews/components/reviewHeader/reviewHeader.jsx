import React from 'react';
import styles from './reviewHeader.css';
import StarRating from '../starRating/starRating.jsx';
import Username from '../username/username.jsx';
import DateOfReview from '../dateOfReview/dateOfReview.jsx';

const ReviewHeader = ({review}) => (
  <div className={styles.reviewHeader}>
    <StarRating />
    <div className={styles.usernameAndDate}>
      <Username username={review.reviewer_name} />
      <DateOfReview date={review.date} />
    </div>
  </div>
);

export default ReviewHeader;
