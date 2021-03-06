import React, { useState } from 'react';
import Styles from './ProductThumbnails.css';

const ProductThumbnails = ({ productThumbnails, currIndex, updateIndex }) => {
  // const [currThumbnail, setCurrThumbnail] = useState(0);
  const changeIndex = (e) => {
    updateIndex(Number(e.target.getAttribute('index')));
  };

  const displayAllThumbnails = productThumbnails.map((thumbnail, index) => {
    return (
      <img
        src={thumbnail.thumbnail_url}
        alt="produc thumbnail"
        index={index}
        className={Styles.productThumbnail}
        id={currIndex === index ? Styles.Selected : ''}
        onClick={changeIndex}
      />
    );
  });

  return (
    <div className={Styles.thumbnails}>
      {displayAllThumbnails}
    </div>
  );
};
// render all image thumbnails
// change styling based on index received from parent
// imageGallery send back current index to parent
  // this is passed down to imgaethumbnails
// when user clicks on new img thumbnails
// passed back index to parent

export default ProductThumbnails;
