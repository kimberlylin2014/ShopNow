import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ reviewCount, avgRating }) => (
  <div>
    <p>Average Rating: {avgRating}</p>
    <p className="ReviewCount">
      Read all
      {reviewCount}
      {' '}
      reviews
    </p>
  </div>
);

Rating.propTypes = {
  reviewCount: PropTypes.number.isRequired,
};

export default Rating;
