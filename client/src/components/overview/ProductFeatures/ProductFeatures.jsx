import React from 'react';
import Feature from './Feature/Feature.jsx';
import Styles from './ProductFeatures.css';

function ProductFeatures({ features }) {
  const listFeatures = features.map((feat, index) => <Feature key={index} feature={feat} />);
  return (
    <ul className={Styles.featureList}>
      {listFeatures}
    </ul>
  );
}

export default ProductFeatures;
