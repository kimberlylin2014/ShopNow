import React from 'react';
import PropTypes from 'prop-types';
import Feature from './Feature/Feature.jsx';
import Styles from './ProductFeatures.css';

function ProductFeatures({ features }) {
  const listFeatures = features.map((feat) => <Feature key={feat.toString().length * Math.random()} feature={feat} />);
  return (
    <ul className={Styles.featureList}>
      {listFeatures}
    </ul>
  );
}

// ProductFeatures.propTypes = {
//  features: PropTypes.object.isRequired,
// };

export default ProductFeatures;
