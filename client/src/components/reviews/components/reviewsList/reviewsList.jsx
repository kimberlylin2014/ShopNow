import React from 'react';
import PropTypes from 'prop-types';
import ReviewTile from '../reviewTile/reviewTile.jsx';
import styles from './reviewsList.css';

const ReviewsList = ({ reviews, updateHelpfulByReviewID }) => (
  <div className={styles.reviewsList}>
    {reviews.map((review) => (
      <ReviewTile
        key={review.review_id}
        review={review}
        updateHelpfulByReviewID={updateHelpfulByReviewID} />
    ))}
  </div>
);

ReviewsList.defaultProps = {
  reviews: [],
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default ReviewsList;
