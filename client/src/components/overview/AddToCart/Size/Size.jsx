import React from 'react';
import Styles from './Size.css';
// import PropTypes from 'prop-types';

class Size extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SKU: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.props.changeSKU(e.target.value);
    this.setState({
      SKU: e.target.getAttribute('SKU'),
    });
  }

  render() {
    const { skus, reset } = this.props;
    const { SKU } = this.state;

    const sizes = Object.entries(skus);
    const displaySize = sizes.map((size, index) => {
      if (size[1].quantity > 0) {
        const selected = size[0] === SKU ? Styles.selected : '';
        return (
          <button
            key={index}
            SKU={size[0]}
            value={size[0]}
            onClick={this.handleOnChange}
            className={Styles.AvailableSize}
            id={reset ? '' : selected}
          >
            {size[1].size}
          </button>
        );
      }
      return (
        <button
          key={index}
          SKU={size[0]}
          value={size[0]}
          className={Styles.OOS}
        >
          {size[1].size}
        </button>
      );
    });

    return (
      <div>
        <p><b>SIZE</b></p>
        <div className={Styles.Sizes}>
          {displaySize}
        </div>
      </div>
    );
  }
}

export default Size;
