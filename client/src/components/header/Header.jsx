import React from 'react';
import Styles from './Header.css';

const Header = ({ itemCount }) => (
  <div className={Styles.header}>
    <h1>Holistic Hawks</h1>
    <img className={Styles.cart} src="icons/shopping-bag.svg" alt="Logo" />
    <p className={Styles.itemCount}>{itemCount}</p>
  </div>
);

export default Header;
