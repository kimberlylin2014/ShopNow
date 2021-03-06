import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styles from './DefaultImages.css';
import ImageSlider from './ImageGallery/ImageGallery.jsx';
import ProductThumbnails from './ProductThumbnails/ProductThumbnails.jsx';

const DefaultImages = ({ photos }) => {
  const [index, setIndex] = useState(0);

  if (photos) {
    return (
      <div className={Styles.gallery}>
        <div className={Styles.currImage}>
          <img className={Styles.images} src={photos[index].url} alt="defaultImage" />
        </div>
        <ImageSlider currIndex={index} updateIndex={setIndex} length={photos.length} />
        
        <ProductThumbnails productThumbnails={photos} currIndex={index} updateIndex={setIndex} />
      </div>
    );
  }
  return <div />;
};

// DefaultImages.propTypes = {
//   photos: PropTypes.string.isRequired,
// };

export default DefaultImages;
