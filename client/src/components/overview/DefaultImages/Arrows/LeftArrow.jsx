import React from 'react';
import Styles from './Arrows.css';

const LeftArrow = ({ length, currIndex, updateIndex }) => {
  const previousPic = () => {
    updateIndex(currIndex - 1);
  };

  return (
    <div className={Styles.arrow}>
      { currIndex > 0 && (
        <img src="icons/leftArrow.png" className={Styles.LeftArrow} onClick={previousPic} />
      )}
    </div>
  );
};

export default LeftArrow;
