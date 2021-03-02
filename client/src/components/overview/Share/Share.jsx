import React from 'react';
import PropTypes from 'prop-types';
import Facebook from './Facebook/Facebook.jsx';
import Twitter from './Twitter/Twitter.jsx';
import Pinterest from './Pinterest/Pinterest.jsx';

const Share = ({ product_id }) => (
  <div>
    <Facebook />
    <Twitter />
    <Pinterest />
  </div>
);

// Share.propTypes = {
//   product_id: PropTypes.string.isRequired,
// };

export default Share;
