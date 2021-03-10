import React, { useRef, useState } from 'react';
import Styles from './Modal.css';
import LeftArrow from '../Arrows/LeftArrow.jsx';
import RightArrow from '../Arrows/RightArrow.jsx';
import Indicators from './Indicators.jsx';

const Modal = ({
  handleClose, show, currIndex, updateIndex, photos,
}) => {
  const expandedImg = useRef(null);
  const [onZoom, setOnZoom] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const showHideClassName = show ? Styles.displayBlock : Styles.displayNone;

  const divStyle = {
    // backgroundPosition: '100px 100px',
    // backgroundPosition: `${x} ${y}`,
  };

  const imagePanning = (e) => {
    const elementNewX = expandedImg.current.clientWidth;
    console.log(e.pageX, elementNewX, e.deltaX);
    // console.log((e.pageX / expandedImg.current.clientWidth) * 100);
  };

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
            ref={expandedImg}
            className={onZoom ? Styles.onZoom : Styles.image}
            src={photos[currIndex].url}
            alt="expandedDefaultImage"
            onMouseDown={() => setOnZoom(!onZoom)}
            onMouseMove={imagePanning}
            style={onZoom ? divStyle : {}}
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

      </section>
    </div>
  );
};

// img mousedown, entire 2.5X scale
// mouseover, change the x & y coordinates
// to the new coordinates

export default Modal;
