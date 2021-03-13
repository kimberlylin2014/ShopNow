import React from 'react';
import Styles from './Quantity.css';

const Quantity = ({ inventory }) => {
  const quantity = Array.from({ length: inventory >= 15 ? 15 : inventory }, (_, i) => i + 1);
  const availability = quantity.map((num, index) => (
    <option
      key={index}
      value={num}
    >
      {num}
    </option>
  ));

  return (
    <div>
      <label className={Styles.label}>
        QTY
        <select
          name="quantity"
          className={Styles.Quantity}
        >
          {availability}
        </select>
      </label>
    </div>
  );
};

export default Quantity;
