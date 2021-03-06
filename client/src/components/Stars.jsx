import React from 'react';
import styles from './starsStyle.css';

const Stars = ({ numStars, starsClass }) => {
  const numFilledStars = Math.floor(numStars);
  const decimal = Number((numStars - numFilledStars).toFixed(2)) * 100;
  const numQuarters = Math.round(decimal / 25);
  let numEmptyStars = 0;
  const array = [];
  for (let i = 0; i < numFilledStars; i++) {
    array.push('stars/filledStar.png');
  }
  if (numQuarters === 0) {
    numEmptyStars = 5 - numFilledStars;
  } else {
    numEmptyStars = 5 - numFilledStars - 1;
    if (numQuarters === 1) {
      array.push('stars/quarterStar.png');
    } else if (numQuarters === 2) {
      array.push('stars/halfStar.png');
    } else if (numQuarters === 3) {
      array.push('stars/threeQuarterStar.png');
    }
  }
  for (let j = 0; j < numEmptyStars; j++) {
    array.push('stars/emptyStar.png');
  }

  return (
    <div className={styles[starsClass]}>
      {array.map((starFile, index) => <img key={index} className={styles.star} src={`${starFile}`} alt={starFile} />)}
    </div>
  );
};

export default Stars;
