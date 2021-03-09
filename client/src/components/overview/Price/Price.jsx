import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Price.css';

const Price = ({ originalPrice, salePrice }) => {
  if (salePrice) {
    return (
      <div>
        <h5 className={Styles.strikethrough}>
          $
          {originalPrice}
        </h5>
        <h5 className={Styles.saleprice}>
          $
          {salePrice}
        </h5>
      </div>
    );
  }
  return (
    <h5>
      $
      {originalPrice}
    </h5>
  );
};

Price.propTypes = {
  originalPrice: PropTypes.string.isRequired,
  salePrice: PropTypes.string,
};

export default Price;
