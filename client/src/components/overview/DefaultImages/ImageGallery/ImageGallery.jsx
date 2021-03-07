import React, { useState } from 'react';
import Styles from './ImageGallery.css';

const ImageSlider = ({ length, currIndex, updateIndex }) => {
  const nextPic = () => {
    updateIndex(currIndex + 1);
  };

  const previousPic = () => {
    updateIndex(currIndex - 1);
  };

  return (
    <div className={Styles.slider}>
      <div className={Styles.arrow}>
        { currIndex > 0 && (
        <img src="icons/leftArrow.png" className={Styles.LeftArrow} onClick={previousPic} />
        )}
      </div>

      <div className={Styles.arrow}>
        { currIndex !== length - 1 && (
        <img src="icons/rightArrow.png" className={Styles.RightArrow} onClick={nextPic} />
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
