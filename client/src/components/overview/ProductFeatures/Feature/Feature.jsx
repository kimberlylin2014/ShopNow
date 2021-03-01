import React from 'react';
import PropTypes from 'prop-types';

const Features = ({ feature }) => (
  <li>
    <p>{feature.feature}</p>
    <p>{feature.value}</p>
  </li>
);

Features.propTypes = {
  feature: PropTypes.shape.isRequired,
};

export default Features;
