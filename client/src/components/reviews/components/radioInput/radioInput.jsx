import React from 'react';
import styles from './radioInput.css';

const RadioInput = ({
  htmlFor,
  type,
  name,
  handleRadioInputChange,
  label,
  value
}) => (
  <label htmlFor={htmlFor}>
    <span>{label}</span>
    <input
      className={styles.radioInput}
      type={type}
      id={htmlFor}
      name={name}
      onChange={handleRadioInputChange}
      tabIndex={0}
      value={value}
    />
  </label>
);

export default RadioInput;