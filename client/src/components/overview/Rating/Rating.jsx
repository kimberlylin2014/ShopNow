import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../../Stars.jsx';

const Rating = ({ reviewCount, avgRating }) => (
  <div>
    <Stars numStars={avgRating} />

    <a href='#reviews' className="ReviewCount">
      Read all
      {' '}
      {reviewCount}
      {' '}
      reviews
    </a>
  </div>
);

Rating.propTypes = {
  reviewCount: PropTypes.number.isRequired,
};

export default Rating;
