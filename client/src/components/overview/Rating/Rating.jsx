import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../../Stars.jsx';
import Styles from './Rating.css';

const Rating = ({ reviewCount, avgRating }) => (
  <div>
    <Stars numStars={avgRating} />
    <a href='#reviews' className={Styles.ReviewCount}>
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
