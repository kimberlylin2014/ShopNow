import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../../Stars.jsx';

const Rating = ({ reviewCount, avgRating }) => {
  const stars = Stars(avgRating);
  return (
  <div>
    <Stars numStars={avgRating} />
    <p className="ReviewCount">
      Read all
      {reviewCount}
      {' '}
      reviews
    </p>
  </div>
)
  };

Rating.propTypes = {
  reviewCount: PropTypes.number.isRequired,
};

export default Rating;
