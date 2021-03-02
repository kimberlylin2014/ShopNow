import React from 'react';
import PropTypes from 'prop-types';

const Catagory = ({ category }) => <div className="category">{category}</div>;

Catagory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Catagory;
