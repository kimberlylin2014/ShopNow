import React from 'react';

const Twitter = ({ product_id }) => (
  <a
    href="https://twitter.com/share?ref_src=twsrc%5Etfw"
    className="twitter-share-button"
    data-show-count="false"
    data-size="large"
  >
    <ion-icon name="logo-twitter" />
  </a>
);

export default Twitter;
