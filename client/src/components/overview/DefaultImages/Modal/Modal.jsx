import React, { useRef, useState } from 'react';
import Styles from './Modal.css';
import LeftArrow from '../Arrows/LeftArrow.jsx';
import RightArrow from '../Arrows/RightArrow.jsx';
import Indicators from './Indicators.jsx';
import ZoomImage from './ZoomImage.jsx';

const Modal = ({
  handleClose, show, currIndex, updateIndex, photos,
}) => {
  // const expandedImg = useRef(null);
  const [onZoom, setOnZoom] = useState(false);
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const showHideClassName = show ? Styles.displayBlock : Styles.displayNone;

  // const divStyle = {
  //   // backgroundPosition: '100px 100px',
  //   // backgroundPosition: `${x} ${y}`,
  // };

  return (
    <div className={showHideClassName}>
      <section className={Styles.modalMain}>

        <img
          src="icons/close.svg"
          alt="close button"
          className={Styles.close}
          onClick={() => handleClose(false)}
        />

        <LeftArrow
          currIndex={currIndex}
          updateIndex={updateIndex}
          length={photos.length}
        />

        <div className={Styles.imgWrapper}>
          <img
            className={Styles.image}
            src={photos[currIndex].url}
            alt="expandedDefaultImage"
            onClick={() => { setOnZoom(!onZoom); }}
          />

          { onZoom
            && <ZoomImage src={photos[currIndex].url} />}

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

      </section>
    </div>
  );
};

// img mousedown, entire 2.5X scale
// mouseover, change the x & y coordinates
// to the new coordinates

export default Modal;
