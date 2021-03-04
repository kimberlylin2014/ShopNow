import React from 'react';
// import PropTypes from 'prop-types';

const Quantity = ({inventory}) => {
  console.log(inventory);
    const quantity = Array.from({length: inventory >= 15 ? 15 : inventory }, (_, i) => i + 1);
    let availability = quantity.map((num) => <option value={num}>{num}</option>);

  // base
  // stop when num is equal to zero
  // recursive
  // call the helper func with the input num as an option

  return <div>
    <label htmlFor="quantity">Select quantity:</label>
    <select name="quantity">
      {availability}
    </select>
  </div>;
};

export default Quantity;
