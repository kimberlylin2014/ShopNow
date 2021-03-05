import React from 'react';
import Styles from './Size.css';
// import PropTypes from 'prop-types';

class Size extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    // console.log(e.target.selectedOptions[0].getAttribute('SKU'));
    console.log(e.target.value);
    this.props.changeSKU(e.target.value);
  }

  render() {
    let sizes = Object.entries(this.props.skus);
    const displaySize = sizes.map((size) => {
      if ( size[1].quantity > 0 ) {
        return <button SKU={size[0]} value={size[0]} onClick={this.handleOnChange} className={Styles.AvailableSize}>{size[1]['size']}</button>
      }
      return <button SKU={size[0]} value={size[0]} className={Styles.OOS}>{size[1]['size']}</button>
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
