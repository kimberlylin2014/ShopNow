import React from 'react';
import ReviewTile from '../reviewTile/reviewTile.jsx';

const ReviewsList = ({reviews}) => (
  <div>
    {reviews.map((review) => <ReviewTile key={review.review_id} review={review} />)}
  </div>
);

ReviewsList.defaultProps = {
  reviews: [],
};

// ReviewsList.propTypes = {
//   reviews: PropTypes.arrayOf(PropTypes.object),
// };

export default ReviewsList;