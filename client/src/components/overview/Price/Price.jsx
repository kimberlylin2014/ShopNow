import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Price.css';

const Price = ({ originalPrice, salePrice }) => {
  if (salePrice) {
    return (
      <div>
        <label className={Styles.strikethrough}>
          $
          {originalPrice}
        </label>
        <label className={Styles.saleprice}>
          $
          {salePrice}
        </label>
      </div>
    );
  }
  return (
    <label>
      $
      {originalPrice}
    </label>
  );
};

Price.propTypes = {
  originalPrice: PropTypes.string.isRequired,
  salePrice: PropTypes.string,
};

export default Price;
