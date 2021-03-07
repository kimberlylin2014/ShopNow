import React, { useState } from 'react';
import Styles from './ProductThumbnails.css';

const ProductThumbnails = ({ productThumbnails, currIndex, updateIndex }) => {
  const [tracker, settracker] = useState(0);
  const { length } = productThumbnails;

  const createThumbnail = (tracker) => {
    if (tracker >= 0 && tracker < length) {
      return (
        <img
          src={productThumbnails[tracker].thumbnail_url}
          alt="product thumbnail"
          className={Styles.productThumbnail}
          id={currIndex === tracker ? Styles.Selected : ''}
          onClick={() => updateIndex(tracker)}
        />
      );
    }
  };

  return (
    <div className={Styles.thumbnails}>
      { productThumbnails.length > 0 && (
      <div className={Styles.thumbnails}>
        <img src='icons/up-arrow.svg' className={Styles.upArrow} onClick={() => settracker(tracker === 0 ? 0 : tracker - 1)} />
        { createThumbnail(tracker) }
        { createThumbnail(tracker + 1) }
        { createThumbnail(tracker + 2) }
        { createThumbnail(tracker + 3) }
        { createThumbnail(tracker + 4) }
        { createThumbnail(tracker + 5) }
        { createThumbnail(tracker + 6) }
        <img src='icons/down-arrow.svg' className={Styles.downArrow} onClick={() => settracker( tracker + 7 === length ? tracker : tracker + 1)} />
      </div>
      )}
    </div>
  );
};

// if productThumbnails.length > 7, then set up a placeholder
// for 7 thumbnails, and a down arrow
// when down arrow is clicked, change the IndexState to 7
// make up arrow appears

export default ProductThumbnails;
