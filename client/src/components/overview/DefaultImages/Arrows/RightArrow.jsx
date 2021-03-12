import React from 'react';
import Styles from './Arrows.css';

const RightArrow = ({ length, currIndex, updateIndex }) => {
  const nextPic = () => {
    updateIndex(currIndex + 1);
  };

  return (
    <div className={Styles.arrow}>
      { currIndex !== length - 1 && (
        <img
          src="icons/rightCaret.png"
          className={Styles.RightArrow}
          onClick={nextPic}
          alt="right arrow"
        />
      )}
    </div>
  );
};

export default RightArrow;
