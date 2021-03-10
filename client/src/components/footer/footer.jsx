import React from 'react';
import styles from './footer.css';

const Footer = () => {
  return (
    <div className={styles.footer}>Icons made by
      <a href="https://www.freepik.com" title="Freepik" className={styles.links}> &nbsp;Freepik</a>&nbsp; from <a href="https://www.flaticon.com/" title="Flaticon" className={styles.links}>&nbsp; www.flaticon.com</a>
    </div>
  )
}

export default Footer;