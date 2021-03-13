import React from 'react';

const Features = ({ feature }) => (
  <li>
    <p>
      {feature.feature}
      {' '}
      { feature.value ? `: ${feature.value}` : ''}
    </p>
  </li>
);

export default Features;
