import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styles from './DefaultImages.css';
import ImageSlider from './ImageGallery/ImageGallery.jsx';
import ProductThumbnails from './ProductThumbnails/ProductThumbnails.jsx';
import Modal from './Modal/Modal.jsx';

const DefaultImages = ({ photos }) => {
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(false);

  if (photos) {
    return (
      <div className={Styles.gallery}>
        <div className={Styles.currImage} onClick={() => { setModal(true); }}>
          <img className={Styles.images} src={photos[index].url} alt="defaultImage" />
        </div>

        <Modal handleClose={setModal} show={modal} />

        <button onClick={() => { setModal(true); }}>
          Open
        </button>

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
