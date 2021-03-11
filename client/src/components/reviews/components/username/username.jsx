import React from 'react';
import styles from './username.css';

const Username = ({ username }) => (
  <div className={styles.userName}>
    <img src="/icons/verified.png" width="10px" className={styles.verified} alt="verified" />
    <p className={styles.text}>{username}</p>
  </div>
);

export default Username;
