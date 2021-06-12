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
  required
}) => (
  <label htmlFor={htmlFor}>
    <span className={required ? styles.requiredField : ''}>{label}</span>
    <input
      placeholder={placeholder}
      className={type === 'text' ? styles.textInput : styles.radioInput}
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
