import React from 'react';
import PropTypes from 'prop-types';
import styles from './Price.css';

const Price = ({ originalPrice, salePrice }) => {
  if (salePrice) {
    return (
      <div>
        <p className="originalprice" className={styles.strikethrough}>
          $
          {originalPrice}
        </p>
        <p className="saleprice">
          $
          {salePrice}
        </p>
      </div>
    );
  }
  return (
    <p className="originalprice">
      $
      {originalPrice}
    </p>
  );
};

Price.propTypes = {
  originalPrice: PropTypes.string.isRequired,
};

export default Price;
