import React from 'react';
import styles from './formInput.css';

const FormInput = ({
  htmlFor,
  type,
  name,
  handleInputChange,
  value,
  label,
  placeholder='...',
}) => (
  <label htmlFor={htmlFor}>
    <span className={styles.requiredField}>{label}</span>
    <input
      placeholder={placeholder}
      className={styles.textInput}
      type={type}
      id={htmlFor}
      name={name}
      onChange={handleInputChange}
      value={value}
      tabIndex={0}
    />
  </label>
);

export default FormInput;
