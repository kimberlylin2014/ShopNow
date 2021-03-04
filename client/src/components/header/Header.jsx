import React from 'react';
// import logo from './shopping-cart.png';
// import PropTypes from 'prop-types';
import Styles from './Header.css';

class Header extends React.Component {
  constructor() {
    super();
  }

  

  render() {
    return (
      <div className={Styles.header}>
        <h1>Logo</h1>
        <img width='50px' height='50px' src='https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1614895283~hmac=37876299e7422c0c52519b5d692192ec' alt="Logo" />
      </div>
    )
  }
};

export default Header;
