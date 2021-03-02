import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ reviewCount }) => <p className="ReviewCount">Read all {reviewCount} reviews</p>;

Rating.propTypes = {
  reviewCount: PropTypes.number.isRequired,
};

export default Rating;
