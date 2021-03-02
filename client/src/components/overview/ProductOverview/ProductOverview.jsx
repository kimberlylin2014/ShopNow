import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ProductOverview.css';

const ProductOverview = ({ slogan, desciprtion }) => {
  return ( <div className={Styles.produtDesc} >
    <h3 className="slogan">{slogan}</h3>
    <p className="desciprtion">{desciprtion}</p>
  </div>);
};

ProductOverview.propTypes = {
  slogan: PropTypes.string.isRequired,
  desciprtion: PropTypes.string.isRequired,
};

export default ProductOverview;
