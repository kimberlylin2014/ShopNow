import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Feature.css';

const Features = ({ feature }) => (
  <li>
    <p>
      {feature.feature}
      {' '}
      { feature.value ? `: ${feature.value}` : ''}
    </p>
  </li>
);

// Features.propTypes = {
//   feature: PropTypes.shape.isRequired,
// };

export default Features;
