import React from 'react';
import Styles from './Quantity.css';
// import PropTypes from 'prop-types';

const Quantity = ({ inventory }) => {
  const quantity = Array.from({ length: inventory >= 15 ? 15 : inventory }, (_, i) => i + 1);
  const availability = quantity.map((num) => <option value={num}>{num}</option>);

  return (
    <div>
      <p><b>QTY</b></p>
      <select name="quantity" className={Styles.Quantity}>
        {availability}
      </select>
    </div>
  );
};

export default Quantity;
