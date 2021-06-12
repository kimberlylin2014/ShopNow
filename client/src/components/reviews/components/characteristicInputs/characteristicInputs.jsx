import React from 'react';
import styles from './characteristicInputs.css';
// import FormInput from '../formInput/formInput.jsx';
import CharacteristicRadioInput from '../characteristicRadioInput/characteristicRadioInput.jsx';

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

const CharacteristInputs = ({ characteristics, handleCharacteristicInputChange }) => {
  const entries = Object.entries(characteristics);
  const info = [];

  entries.forEach((entry) => {
    info.push([entry[0], entry[1].id]);
  });

  const allRows = [];
  let counter = 0;
  for (let i = 0; i < info.length; i += 1) {
    const row = [];
    for (let j = 0; j < 5; j += 1) {
      row.push(
        <CharacteristicRadioInput
          key={counter++}
          htmlFor={`${entries[i][0]}${j + 1}`}
          type="radio"
          name={`${entries[i][1].id}`}
          handleCharacteristicInputChange={handleCharacteristicInputChange}
          value={j + 1}
          label={characteristicChart[entries[i][0]][j + 1]}
        />,
      );
    }
    allRows.push(
      <div key={counter++}>
        <p className={styles.radioRowTitle}>{entries[i][0]}</p>
        <div className={styles.radioRow}>
          {row}
        </div>
      </div>,
    );
  }

  return (
    <div className={styles.characteristicInputs}>
      {allRows}
    </div>
  );
};

export default CharacteristInputs;
