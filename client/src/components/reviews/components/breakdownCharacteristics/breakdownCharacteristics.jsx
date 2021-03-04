import React from 'react';
import BreakdownOneCharacteristic from '../breakdownOneCharacteristic/breakdownOneCharacteristic.jsx';

const BreakdownCharacteristics = ({metaReview}) => {
  let list = null;
  if (metaReview) {
    const entries = Object.entries(metaReview.characteristics);
    list = entries.map((entry) => (
      <BreakdownOneCharacteristic
        key={entry[1].id}
        name={entry[0]}
        value={parseFloat(entry[1].value).toFixed(2)}
      />
    ));
  }
  return (
    <div>
      {list}
    </div>
  );
};

export default BreakdownCharacteristics;
