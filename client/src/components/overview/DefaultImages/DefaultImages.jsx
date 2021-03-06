import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Styles from './DefaultImages.css';
import ImageSlider from './ImageGallery/ImageGallery.jsx';

const DefaultImages = ({
  photos, alt, key, allStyles,
}) => {

  console.log(photos);
  if (photos) {
    const displayImages = photos.map((pic, index) => (
      <img
        className={Styles.mainImage}
        src={pic.url}
        alt={alt}
        key={index}
      />
    ));

    return (
      <div className={Styles.gallery}>
        {/* { displayImages } */}
        <ImageSlider productImages={photos} />
      </div>
    );
  }
  return <div />;
};

// DefaultImages.propTypes = {
//   photos: PropTypes.string.isRequired,
// };

export default DefaultImages;
