import React from 'react';
import styles from './characteristicRadioInput.css';

const CharacteristicRadioInput = ({htmlFor, type, name, handleCharacteristicInputChange, value, label}) => (
  <div className={styles.flexColumn}>
    <input
      type={type}
      id={htmlFor}
      name={name}
      onChange={handleCharacteristicInputChange}
      value={value}
      className={styles.charRadio}
    />
    <label htmlFor={htmlFor} className={styles.labelSize}>
      {label}
    </label>
  </div>
);

export default CharacteristicRadioInput;
