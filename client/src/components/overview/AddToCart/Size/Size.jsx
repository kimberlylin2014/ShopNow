import React from 'react';
// import PropTypes from 'prop-types';

const Size = () => {
  return <div>
    <label htmlFor="size">Select Size:</label>
    <select name="size">
      <option value="XS">XS</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
    </select>
  </div>;
};

export default Size;
