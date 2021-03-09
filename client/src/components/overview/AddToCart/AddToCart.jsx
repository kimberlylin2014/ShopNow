import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import Styles from './AddToCart.css';
import Size from './Size/Size.jsx';
import Quantity from './Quantity/Quantity.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSKU: props.currentStyleObj
        ? Object.keys(props.currentStyleObj.skus)[0] : '',
      // quantitySelected: 0,
      needSize: true,
      selectSizeMessage: false,
      reset: false,
    };
    this.changeSKU = this.changeSKU.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  changeSKU(currentSKU) {
    this.setState({ currentSKU, needSize: false });
  }

  changeQuantity(quantitySelected) {
    this.setState({ quantitySelected });
  }

  addToCart(e) {
    e.preventDefault();
    if (this.state.needSize) {
      this.setState({
        selectSizeMessage: true,
      });
    } else {
      axios.post('/api/cart', {
        sku_id: this.state.currentSKU,
        // count: this.state.quantitySelected,
      }).then(() => {
        this.setState({
          needSize: true,
          selectSizeMessage: false,
          reset: true,
        });
      }).catch((e) => console.log('Error', e));
    }
  }

  render() {
    const { currentStyleObj } = this.props;
    const { currentSKU, selectSizeMessage, reset } = this.state;

    return (
      <div>
        <Size
          skus={currentStyleObj
            ? currentStyleObj.skus : ''}
          changeSKU={this.changeSKU}
          reset={reset}
        />

        <p
          className={selectSizeMessage
            ? Styles.sizeMessage
            : Styles.displayNone}
        >
          Please Select A Size
        </p>

        <Quantity
          inventory={currentSKU && currentStyleObj.skus
          && currentStyleObj.skus[currentSKU]
            ? currentStyleObj.skus[currentSKU].quantity : ''}
          // changeQuantity={this.changeQuantity}
        />
        <br />
        <button
          type="submit"
          className={Styles.AddToCart}
          onClick={this.addToCart}
        >
          ADD TO CART
        </button>
      </div>
    );
  }
}

export default AddToCart;
