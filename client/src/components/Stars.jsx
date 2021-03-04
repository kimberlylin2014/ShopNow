import React from 'react';
import styles from './starsStyle.css';

const Stars = ({ numStars }) => {
  //example: numStars = 3.64
  let numFilledStars = Math.floor(numStars); // 3
  let decimal = Number((numStars - numFilledStars).toFixed(2)) * 100; // 64
  let numQuarters = Math.round(decimal / 25); // 3
  let numEmptyStars = 0;
  const array = [];
  for (let i = 0; i < numFilledStars; i++) {
    array.push('stars/filledStar.svg');
  }
  if (numQuarters === 0) {
    numEmptyStars = 4 - numFilledStars;
  } else {
    numEmptyStars = 4 - numFilledStars - 1;
    if (numQuarters === 1) {
      array.push('stars/quarterStar.svg');
    } else if (numQuarters === 2) {
      array.push('stars/halfStar.svg');
    } else if (numQuarters === 3) {
      array.push('stars/threeQuarterStar.svg');
    }
  }
  for (let j = 0; j < numEmptyStars; j++) {
    array.push('stars/emptyStar.svg');
  }
  // display {numFilledStars} filled stars
  // numQuarters === 0 ? display {numStars - numFilledStars} empty stars
  // numQuarters === 1 ? display quarter star and {numStars - numFilledStars - 1} empty stars
  // numQuarters === 2 ? display half star and {numStars - numFilledStars - 1} empty stars
  // numQuarters === 3 ? display three quarter star and {numStars - numFilledStars - 1} empty stars

  // create array with five file names
  // example: 3.64 would translate to this array:
  // ['stars/filledStar.svg', 'stars/filledStar.svg', 'stars/filledStar.svg', 'stars/threeQuarterStar.svg', 'stars/emptyStar.svg']

  return (
    <div>
      {array.map((starFile) => {
        console.log(starFile);
        return <img className={styles.star} src={`${starFile}`} alt={starFile} />
      })}

    </div>
  );
};

export default Stars;
