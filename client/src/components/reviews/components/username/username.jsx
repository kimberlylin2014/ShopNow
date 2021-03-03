import React from 'react';
import styles from './username.css';

const Username = ({ username }) => (
  <div className={styles.userName}>
    {username}
  </div>
);

export default Username;
