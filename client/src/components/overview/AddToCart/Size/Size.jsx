import React from 'react';
// import PropTypes from 'prop-types';

class Size extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    // console.log(e.target.selectedOptions[0].getAttribute('SKU'));
    this.props.changeSKU(e.target.value);
  }

  render() {
    let sizes = Object.entries(this.props.skus);
    const displaySize = sizes.map((size) => <option SKU={size[0]} value={size[0]}>{size[1]['size']}</option>);

    return (<div>
        <label htmlFor="size">Select Size:</label>
        <select name="size" onChange={this.handleOnChange}>
          {displaySize}
        </select>
      </div>
    );
  }
}

export default Size;
