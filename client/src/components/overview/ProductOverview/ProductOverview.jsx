import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ProductOverview.css';

const ProductOverview = ({ slogan, desciprtion }) => {
  return ( <div className={Styles.produtDesc} >
    <h2 className="slogan">{slogan}</h2>
    <p className="desciprtion">{desciprtion}</p>
  </div>);
};

ProductOverview.propTypes = {
  slogan: PropTypes.string.isRequired,
  desciprtion: PropTypes.string.isRequired,
};

export default ProductOverview;
