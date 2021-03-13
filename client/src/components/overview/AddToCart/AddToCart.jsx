import React from 'react';
import Styles from './AddToCart.css';
import Size from './Size/Size.jsx';
import Quantity from './Quantity/Quantity.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSKU: props.currentStyleObj
        ? Object.keys(props.currentStyleObj.skus)[0] : '',
      needSize: true,
      selectSizeMessage: false,
      reset: false,
    };
    this.changeSKU = this.changeSKU.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.changeReset = this.changeReset.bind(this);
  }

  changeSKU(currentSKU) {
    this.setState({ currentSKU, needSize: false });
  }

  changeReset() {
    this.setState({ reset: false });
  }

  addToCart() {
    if (this.state.needSize) {
      this.setState({
        selectSizeMessage: true,
      });
    } else {
      this.props.onAddToCart(this.state.currentSKU);
      this.setState({
        needSize: true,
        selectSizeMessage: false,
        reset: true,
      });
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
          changeReset={this.changeReset}
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
