import React from 'react';
// import PropTypes from 'prop-types';
import Size from './Size/Size.jsx';
import Quantity from './Quantity/Quantity.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // skus={this.props.currentStyleObj ? this.props.currentStyleObj['skus'] : ''}
    return (
      <div>
        <Size skus={this.props.currentStyleObj ? this.props.currentStyleObj['skus'] : ''}/>
        <Quantity />
        <button>Add To Cart</button>
      </div>
    );
  }
}

export default AddToCart;
