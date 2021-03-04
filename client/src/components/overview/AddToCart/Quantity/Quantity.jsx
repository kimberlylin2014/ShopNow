import React from 'react';
// import PropTypes from 'prop-types';

const Quantity = ({inventory}) => {
    const quantity = Array.from({length: inventory >= 15 ? 15 : inventory }, (_, i) => i + 1);
    let availability = quantity.map((num) => <option value={num}>{num}</option>);
    
  return <div>
    <label htmlFor="quantity">Select quantity:</label>
    <select name="quantity">
      {availability}
    </select>
  </div>;
};

export default Quantity;
