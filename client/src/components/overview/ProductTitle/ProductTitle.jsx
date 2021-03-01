import React from 'react';
import PropTypes from 'prop-types';

const ProductTitle = ({ title }) => <div className="title">{title}</div>;

ProductTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProductTitle;
