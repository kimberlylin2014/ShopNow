import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styles from './DefaultImages.css';
import LeftArrow from './Arrows/LeftArrow.jsx';
import RightArrow from './Arrows/RightArrow.jsx';
import ProductThumbnails from './ProductThumbnails/ProductThumbnails.jsx';
import Modal from './Modal/Modal.jsx';

const DefaultImages = ({ photos }) => {
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(false);

  if (photos) {
    return (
      <div className={Styles.gallery}>

        <LeftArrow
          currIndex={index}
          updateIndex={setIndex}
          length={photos.length}
        />

        <div className={Styles.imagesAndThumbnails}>
          <img
            className={Styles.images}
            src={ photos[index] && photos[index].url ? photos[index].url : 'icons/no-image.png'}
            alt="defaultImage"
            onClick={() => { setModal(true); }}
          />
          <ProductThumbnails
            productThumbnails={photos}
            currIndex={index}
            updateIndex={setIndex}
          />
        </div>

        <RightArrow
          currIndex={index}
          updateIndex={setIndex}
          length={photos.length}
        />

        <Modal
          handleClose={setModal}
          show={modal}
          currIndex={index}
          updateIndex={setIndex}
          photos={photos}
        />
      </div>
    );
  }
  return <div />;
};

export default DefaultImages;
