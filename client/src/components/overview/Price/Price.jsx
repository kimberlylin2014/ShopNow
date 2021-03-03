import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Price.css';

const Price = ({ originalPrice, salePrice }) => {
  if (salePrice) {
    return (
      <div>
        <p className={Styles.strikethrough}>
          $
          {originalPrice}
        </p>
        <p className={Styles.saleprice}>
          $
          {salePrice}
        </p>
      </div>
    );
  }
  return (
    <p>
      $
      {originalPrice}
    </p>
  );
};

Price.propTypes = {
  originalPrice: PropTypes.string.isRequired,
  salePrice: PropTypes.string,
};

export default Price;
