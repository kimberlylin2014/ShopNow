import React from 'react';
import styles from './reviewHeader.css';
import StarRating from '../starRating/starRating.jsx';
import Username from '../username/username.jsx';
import DateOfReview from '../dateOfReview/dateOfReview.jsx';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const ReviewHeader = ({review}) => {
  const date = new Date(review.date);
  const monthDateYear = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getUTCFullYear()}`;
  return (
    <div className={styles.reviewHeader}>
      <StarRating />
      <div className={styles.usernameAndDate}>
        <Username username={review.reviewer_name} />
        <DateOfReview date={monthDateYear} />
      </div>
    </div>
  )
}


export default ReviewHeader;
