import React, { useState } from 'react';
import Styles from './Modal.css';
import LeftArrow from '../Arrows/LeftArrow.jsx';
import RightArrow from '../Arrows/RightArrow.jsx';
import Indicators from './Indicators.jsx';
import ZoomImage from './ZoomImage.jsx';

const Modal = ({
  handleClose, show, currIndex, updateIndex, photos,
}) => {
  const [onZoom, setOnZoom] = useState(false);
  const showModal = show ? Styles.displayBlock : Styles.displayNone;

  const zoomImage = onZoom
    ? (
      <div
        className={Styles.panningWrapper}
        onClick={() => { setOnZoom(!onZoom); }}
      >
        <ZoomImage
          src={photos[currIndex].url}
        />
      </div>
    )
    : (
      <img
        className={Styles.image}
        src={photos[currIndex].url}
        alt="expandedDefaultImage"
        onClick={() => { setOnZoom(!onZoom); }}
      />
    );

  return (
    <div className={showModal}>
      <section className={Styles.modalMain}>

        <img
          src="icons/close.svg"
          alt="close button"
          className={Styles.close}
          onClick={() => handleClose(false)}
        />
        <div className={onZoom ? Styles.displayNone : Styles.displayBlock}>
          <LeftArrow
            currIndex={currIndex}
            updateIndex={updateIndex}
            length={photos.length}
          />
        </div>

        <div className={Styles.imgWrapper}>
          {zoomImage}

          <div className={onZoom ? Styles.displayNone : Styles.displayBlock}>
            <Indicators
              currIndex={currIndex}
              updateIndex={updateIndex}
              photos={photos}
            />
          </div>
        </div>

        <div className={onZoom ? Styles.displayNone : Styles.displayBlock}>
          <RightArrow
            currIndex={currIndex}
            updateIndex={updateIndex}
            length={photos.length}
          />
        </div>

      </section>
    </div>
  );
};

export default Modal;
