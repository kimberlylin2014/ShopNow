import React from 'react';
// import PropTypes from 'prop-types';

const Quantity = () => {
  return <div>
    <label htmlFor="quantity">Select quantity:</label>
    <select name="quantity">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  </div>;
};

export default Quantity;
