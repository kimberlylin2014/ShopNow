import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ category }) => <h2 className="category">{category}</h2>;

Category.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Category;
