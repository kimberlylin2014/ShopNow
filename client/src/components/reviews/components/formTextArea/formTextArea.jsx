import React from 'react';
import styles from './formTextArea.css';

const FormTextArea = ({htmlFor, name, handleInputChange, value, label, placeholder='...', required}) => (
  <label htmlFor={htmlFor}>
    <span className={required ? styles.requiredField : ''}>{label}</span>
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
