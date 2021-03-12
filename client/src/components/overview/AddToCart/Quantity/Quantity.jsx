import React from 'react';
import Styles from './Quantity.css';
// import PropTypes from 'prop-types';

const Quantity = ({ inventory }) => {
  const quantity = Array.from({ length: inventory >= 15 ? 15 : inventory }, (_, i) => i + 1);
  const availability = quantity.map((num, index) => <option key={index} value={num}>{num}</option>);

  return (
    <div className={Styles.qtyContainter}>
      <label className={Styles.label}>QTY</label>
      <select
        name="quantity"
        className={Styles.Quantity}
      >
        {availability}
      </select>
    </div>
  );
};

export default Quantity;
