import React from 'react';
import styles from './formTextArea.css';

const FormTextArea = ({htmlFor, name, handleInputChange, value, label}) => (
  <label htmlFor={htmlFor}>
    {label}
    <textarea
      className={styles.textInput}
      id={htmlFor}
      name={name}
      onChange={handleInputChange}
      value={value}
    />
  </label>
);

export default FormTextArea;
