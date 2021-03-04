import React from 'react';
// import PropTypes from 'prop-types';
import Size from './Size/Size.jsx';
import Quantity from './Quantity/Quantity.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSKU:'',
    };
    this.changeSKU = this.changeSKU.bind(this);
  }

  changeSKU(SKU) {
    this.setState({
      currentSKU:SKU,
    });
  }

  render() {
    return (
      <div>
        <Size skus={this.props.currentStyleObj ? this.props.currentStyleObj.skus : ''} changeSKU={this.changeSKU} />
        <Quantity skus={this.props.currentStyleObj ? this.props.currentStyleObj.skus : ''} />
        <button>Add To Cart</button>
      </div>
    );
  }
}

export default AddToCart;
