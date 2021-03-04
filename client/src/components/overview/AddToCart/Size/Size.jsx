import React from 'react';
// import PropTypes from 'prop-types';

class Size extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const removeId = e.target.getAttribute('test');
    console.log(removeId);
    this.props.changeSKU(e.target.value);
  }

  render() {
    let sizes = Object.entries(this.props.skus);
    const displaySize = sizes.map((size) => <option test={size[0]} value={size[0]}>{size[1]['size']}</option>);

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
