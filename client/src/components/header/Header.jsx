import React from 'react';
import Styles from './Header.css';

const Header = ({ itemCount }) => (
  <div className={Styles.header}>
    <h1 className={Styles.storeName}>Holistic Hawks</h1>
    <div className={Styles.shoppingbag}>
      <img className={Styles.cart} src="icons/shopping-bag.svg" alt="Logo" />
      <p className={Styles.itemCount}>{itemCount}</p>
    </div>
  </div>
);

export default Header;
