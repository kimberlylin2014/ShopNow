import React from 'react';
import PropTypes from 'prop-types';

const Catagory = ({ category }) => <h3 className="category">{category}</h3>;

Catagory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Catagory;
