import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Styles from './Header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      itemInCart: 0,
    };
    this.getTotalItem = this.getTotalItem.bind(this);
  }

  componentDidMount() {
    this.getTotalItem();
  }

  getTotalItem() {
    axios.get('api/cart').then((data) => {
      let totalItem = 0;
      for (const keys in data.data) {
        totalItem += Number(data.data[keys].count);
      }
      this.setState({
        itemInCart: totalItem,
      });
    });
  }

  render() {
    return (
      <div className={Styles.header}>
        <h1>Holistic Hawks</h1>
        <img className={Styles.cart} src="icons/shopping-bag.svg" alt="Logo" />
        <p>{this.state.itemInCart}</p>
      </div>
    );
  }
}

export default Header;
