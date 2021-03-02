import React from 'react';
import PropTypes from 'prop-types';

const ProductOverview = ({ slogan, desciprtion }) => {
  return <div className="ProductDesc">
    <h3 className="slogan">{slogan}</h3>
    <p className="desciprtion">{desciprtion}</p>
  </div>;
};

ProductOverview.propTypes = {
  slogan: PropTypes.string.isRequired,
  desciprtion: PropTypes.string.isRequired,
};

export default ProductOverview;
