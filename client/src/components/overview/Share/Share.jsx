import React from 'react';
import PropTypes from 'prop-types';
import Facebook from './Facebook/Facebook.jsx';
import Twitter from './Twitter/Twitter.jsx';
import Pinterest from './Pinterest/Pinterest.jsx';
import Styles from './Share.css';

const Share = () => (
  <div className={Styles.Share}>
    <Facebook />
    <Twitter />
    <Pinterest />
  </div>
);

export default Share;
