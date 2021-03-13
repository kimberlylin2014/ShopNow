import React from 'react';
import PropTypes from 'prop-types';

const ProductTitle = ({ title }) => <h1>{title}</h1>;

ProductTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProductTitle;
