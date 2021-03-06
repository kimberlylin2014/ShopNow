import React, { useState } from 'react';
import Styles from './ImageGallery.css';

const ImageSlider = ({ productImages }) => {
  const [current, setCurrent] = useState(0);
  const { length } = productImages;

  if (!Array.isArray(productImages) || length <= 0) {
    return null;
  }

  const nextPic = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousPic = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const imageGallery = productImages.map((image, index) => (
    <div className={current === index ? Styles.CurrentPic : Styles.slider}>
      { current === index && (
        <img className={Styles.images} src={image.url} alt="productThumbnail" />)}
    </div>
  ));

  return (
    <div className={Styles.slider}>
      { current !== 0 && (
      <div className={Styles.LeftArrow} onClick={previousPic}>
        <img src='icons/leftArrow.png' />
      </div>
      )}

      { current !== length - 1 && (
      <div className={Styles.RightArrow} onClick={nextPic}>
        <img src='icons/rightArrow.png' />
      </div>
      )}
      {imageGallery}
    </div>
  );
};

export default ImageSlider;
