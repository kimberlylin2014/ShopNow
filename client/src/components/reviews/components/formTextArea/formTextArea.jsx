import React from 'react';
import styles from './formTextArea.css';

const FormTextArea = ({htmlFor, name, handleInputChange, value, label, placeholder='...'}) => (
  <label htmlFor={htmlFor}>
    {label}
    <textarea
      placeholder={placeholder}
      className={styles.textInput}
      id={htmlFor}
      name={name}
      onChange={handleInputChange}
      value={value}
    />
  </label>
);

export default FormTextArea;
