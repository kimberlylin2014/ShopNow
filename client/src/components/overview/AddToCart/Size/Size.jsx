import React from 'react';
// import PropTypes from 'prop-types';

class Size extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let sizes = Object.entries(this.props.skus);
    const displaySize =sizes.map((size) => <option value={size[1]['size']}>{size[1]['size']}</option>);
    return (<div>
        <label htmlFor="size">Select Size:</label>
        <select name="size">
          {displaySize}
        </select>
      </div>
    );
  }
}

export default Size;
