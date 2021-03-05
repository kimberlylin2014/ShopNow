import React from 'react';
import PropTypes from 'prop-types';
import Facebook from './Facebook/Facebook.jsx';
import Twitter from './Twitter/Twitter.jsx';
import Pinterest from './Pinterest/Pinterest.jsx';
import Styles from './Share.css';

const Share = ({ product_id }) => (
  <div className={Styles.Share}>
    <Facebook />
    <Twitter />
    <Pinterest />
  </div>
);

// Share.propTypes = {
//   product_id: PropTypes.string.isRequired,
// };

export default Share;
