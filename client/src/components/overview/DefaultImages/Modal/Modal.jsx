import React from 'react';
import Styles from './Modal.css';
import ImageSlider from '../ImageGallery/ImageGallery.jsx';

const Modal = ({
  handleClose, show, currIndex, updateIndex, photos,
}) => {
  const showHideClassName = show ? Styles.displayBlock : Styles.displayNone;

  return (
    <div className={showHideClassName}>
      <section className={Styles.modalMain}>
        <img src="icons/close.svg" className={Styles.close} onClick={() => handleClose(false)} />

        <div className={Styles.currImage}>
          <img className={Styles.images} src={photos[currIndex].url} alt="expandedDefaultImage" />
        </div>

        <div className={Styles.arrows}>
          <ImageSlider currIndex={currIndex} updateIndex={updateIndex} length={photos.length} />
        </div>
      </section>
    </div>
  );
};

export default Modal;
