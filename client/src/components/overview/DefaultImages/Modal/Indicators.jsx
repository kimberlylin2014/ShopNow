import React from 'react';
import Styles from './Modal.css';

const Indicators = ({ currIndex, updateIndex, photos }) => {
  const makeIndicators = (index) => (
    <div
      className={currIndex === index ? Styles.indicator : Styles.notSelected}
      onClick={() => updateIndex(index)}
      key={index}
    />
  );

  return photos.length > 0 && (
    <div className={Styles.Indicators}>
      {photos.map((photo, index) => makeIndicators(index))}
    </div>
  );
};

export default Indicators;
