import React from 'react';
import styles from './star.css';

const Star = ({id, handleMouseEnter, star, opacity, handleMouseLeave, handleOnClick}) => (
  <div
    style={{opacity: opacity}}
    role="button"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={handleOnClick}
    tabIndex={0}
    onKeyPress={handleOnClick}
  >
    <img
      className={styles.starImg}
      src={star}
      alt="star"
      data-id={`star${id}`}
    />
  </div>
);

export default Star;
