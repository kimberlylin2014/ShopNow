import React from 'react';
import styles from './formTextArea.css';

const FormTextArea = ({htmlFor, name, handleBodyInputChange, value, label}) => (
  <label htmlFor={htmlFor}>
    <span className={styles.requiredField}>{label}</span>
    <textarea
      className={styles.textInput}
      id={htmlFor}
      name={name}
      onChange={handleBodyInputChange}
      value={value}
    />
  </label>
);

export default FormTextArea;
