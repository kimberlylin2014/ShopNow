import React from 'react';
import PropTypes from 'prop-types';

const Catagory = ({ category }) => <h2 className="category">{category}</h2>;

Catagory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Catagory;
