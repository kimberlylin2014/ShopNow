import React from 'react';
import BreakdownOneCharacteristic from '../breakdownOneCharacteristic/breakdownOneCharacteristic.jsx';

const BreakdownCharacteristics = ({metaReview}) => {
  const entries = Object.entries(metaReview.characteristics);
  console.log(entries);
  const list = entries.map((entry) => (
    <BreakdownOneCharacteristic name={entry[0]} value={parseFloat(entry[1].value).toFixed(2)}/>
  ));
  return (
    <div>
      {list}
    </div>

  );
}


export default BreakdownCharacteristics;
