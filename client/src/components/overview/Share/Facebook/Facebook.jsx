import React from 'react';

const Facebook = ({ product_id }) => (
  <div
    className="fb-share-button"
    data-href="https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/14297/"
    data-layout="button"
    data-size="large"
  >
    <a
      target="_blank"
      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fapp-hrsei-api.herokuapp.com%2Fapi%2Ffec2%2Fhr-sfo%2Fproducts%2F14297%2F&amp;src=sdkpreparse"
      className="fb-xfbml-parse-ignore"
    >
      <ion-icon name="logo-facebook" />
    </a>
  </div>
);

export default Facebook;
