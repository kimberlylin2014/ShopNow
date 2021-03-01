import React from 'react';
// import PropTypes from 'prop-types';
import Size from './Size/Size.jsx';
import Quantity from './Quantity/Quantity.jsx';

const AddToCart = () => (
  <div>
    <Size />
    <Quantity />
    <button>Add To Cart</button>
  </div>
);

export default AddToCart;
