import React from 'react';
import styles from './characteristicInputs.css';
import FormInput from '../formInput/formInput.jsx';

const characteristicChart = {
  Fit: {
    1: 'Runs tight',
    2: 'Runs slightly tight',
    3: 'Perfect',
    4: 'Runs Slightly Long',
    5: 'Runs Long',
  },
  Length: {
    1: 'Runs Short',
    2: 'Runs slightly short',
    3: 'Perfect',
    4: 'Runs Slightly Long',
    5: 'Runs Long',
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
    2: 'Slightly uncomfortabl',
    3: 'Ok',
    4: 'Comfortable',
    5: 'Perfect',
  },
  Width: {
    1: 'Too narrow',
    2: 'Slightly narrow',
    3: 'Perfect',
    4: 'Slightly Wide',
    5: 'Too wide',
  },
  Size: {
    1: 'A size too small',
    2: '½ a size too small',
    3: 'Perfect',
    4: '½ a size too big',
    5: 'A size too wide',
  },
};

const CharacteristInputs = ({ characteristics, handleInputChange }) => {
  const entries = Object.entries(characteristics);
  const info = [];

  entries.forEach((entry) => {
    info.push([entry[0], entry[1].id]);
  });

  const allRows = [];

  for (let i = 0; i < info.length; i += 1) {
    const row = [];
    for (let j = 0; j < 5; j += 1) {
      row.push(
        <FormInput
          htmlFor={`${entries[i][0]}${j + 1}`}
          type="radio"
          name={`${entries[i][1]}`}
          handleInputChange={handleInputChange}
          value={j + 1}
          label={characteristicChart[entries[i][0]][j + 1]}
        />,
      );
    }
    allRows.push(
      <div>
        <span className={styles.bold}>{entries[i][0]}</span>
        {row}
        <br />
      </div>,
    );
  }
  return (
    <div>
      {allRows}
    </div>
  );
};

export default CharacteristInputs;
