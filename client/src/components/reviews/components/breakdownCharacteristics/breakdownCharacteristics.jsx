import React from 'react';
import styles from './breakdownCharacteristics.css';
import BreakdownOneCharacteristic from '../breakdownOneCharacteristic/breakdownOneCharacteristic.jsx';
import BreakdownProgressBar from '../breakdownProgressBar/breakdownProgressBar.jsx';
import {calculateCharacteristicBreakdown} from '../../utils/rating.js'

const characteristicChart = {
  Fit: {
    1: 'Runs tight',
    2: 'Runs slightly tight',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long',
  },
  Length: {
    1: 'Runs short',
    2: 'Runs slightly short',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long',
  },
  Quality: {
    1: 'Poor',
    2: 'Below average',
    3: 'What I expected',
    4: 'Pretty great',
    5: 'Perfect',
  },
  Comfort: {
    1: 'Uncomfortable',
    2: 'Slightly uncomfortable',
    3: 'Okay',
    4: 'Comfortable',
    5: 'Perfect',
  },
  Width: {
    1: 'Too narrow',
    2: 'Slightly narrow',
    3: 'Perfect',
    4: 'Slightly wide',
    5: 'Too wide',
  },
  Size: {
    1: 'A size too small',
    2: '½ a size too small',
    3: 'Perfect',
    4: 'Half a size too big',
    5: 'A size too wide',
  },
};

const BreakdownCharacteristics = ({metaReview}) => {
  let list = null;
  if (metaReview) {
    const entries = Object.entries(metaReview.characteristics);
    list = entries.map((entry) => {
      let data = calculateCharacteristicBreakdown(parseFloat(entry[1].value).toFixed(1));
      return (
        <div className={styles.breakdownCharacteristic}>
          <BreakdownOneCharacteristic
            key={entry[1].id}
            name={entry[0]}
            value={parseFloat(entry[1].value).toFixed(1)}
          />
          <div className={styles.breakdownProgressBarSection}>
            <BreakdownProgressBar label={characteristicChart[entry[0]][1]} box="box1" data={data}/>
            <BreakdownProgressBar label={characteristicChart[entry[0]][3]} box="box2" data={data}/>
            <BreakdownProgressBar label={characteristicChart[entry[0]][5]} box="box3" data={data}/>
          </div>
        </div>
      );
    });
  }
  return (
    <div className={styles.breakdownCharacteristicSection}>
      {list}
    </div>
  );
};

export default BreakdownCharacteristics;
