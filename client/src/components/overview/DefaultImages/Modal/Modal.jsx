import React, { useRef, useState } from 'react';
import Styles from './Modal.css';
import LeftArrow from '../Arrows/LeftArrow.jsx';
import RightArrow from '../Arrows/RightArrow.jsx';
import Indicators from './Indicators.jsx';
import ZoomImage from './ZoomImage.jsx';

const Modal = ({
  handleClose, show, currIndex, updateIndex, photos,
}) => {
  const [onZoom, setOnZoom] = useState(false);
  const showHideClassName = show ? Styles.displayBlock : Styles.displayNone;

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
    <div className={showHideClassName}>
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
        {/*
      <div className={Styles.imgWrapper}>
      <img
        className={Styles.image}
        src={photos[currIndex].url}
        alt="expandedDefaultImage"
        onClick={() => { setOnZoom(!onZoom); }}
      />

      <Indicators
        currIndex={currIndex}
        updateIndex={updateIndex}
        photos={photos}
      />
    </div>

    <RightArrow
      currIndex={currIndex}
      updateIndex={updateIndex}
      length={photos.length}
    />

        <LeftArrow
          currIndex={currIndex}
          updateIndex={updateIndex}
          length={photos.length}
        /> */}

        <div className={Styles.imgWrapper}>
          {zoomImage}
          {/* <img
            className={Styles.image}
            src={photos[currIndex].url}
            alt="expandedDefaultImage"
            onClick={() => { setOnZoom(!onZoom); }}
          />

          { onZoom
            && (
            <div id={Styles.onZoom}>
              {' '}
              <ZoomImage src={photos[currIndex].url} />
              {' '}
            </div>
            )} */}
          <div className={onZoom ? Styles.displayNone : Styles.displayBlock}>
          <Indicators
            currIndex={currIndex}
            updateIndex={updateIndex}
            photos={photos}
            className={onZoom ? Styles.displayNone : Styles.displayBlock}
          />
          </div>
        </div>

        <div className={onZoom ? Styles.displayNone : Styles.displayBlock}>
        <RightArrow
          currIndex={currIndex}
          updateIndex={updateIndex}
          length={photos.length}
          className={onZoom ? Styles.displayNone : Styles.displayBlock}
        />
        </div>

      </section>
    </div>
  );
};

// img mousedown, entire 2.5X scale
// mouseover, change the x & y coordinates
// to the new coordinates

export default Modal;
