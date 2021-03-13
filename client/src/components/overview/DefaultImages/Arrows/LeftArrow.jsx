import React from 'react';
import Styles from './Arrows.css';

const LeftArrow = ({ currIndex, updateIndex }) => {
  const previousPic = () => {
    updateIndex(currIndex - 1);
  };

  return (
    <div className={Styles.arrow}>
      { currIndex > 0 && (
        <img
          src="icons/leftCaret.png"
          className={Styles.LeftArrow}
          onClick={previousPic}
          alt="left arrow"
        />
      )}
    </div>
  );
};

export default LeftArrow;
