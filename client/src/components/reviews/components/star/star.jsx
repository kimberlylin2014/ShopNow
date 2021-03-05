import React from 'react';
import styles from './star.css';

const Star = ({id, handleMouseEnter, star, opacity, handleMouseLeave, handleOnClick}) => (
  <div style={{opacity: opacity}}>
    <img
      className={styles.starImg}
      src={star}
      alt="star"
      data-id={`star${id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    />
  </div>
);

export default Star;
