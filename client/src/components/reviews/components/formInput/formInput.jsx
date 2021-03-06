import React from 'react';
import styles from './formInput.css';

const FormInput = ({htmlFor, type, name, handleInputChange, value, label, placeholder='...'}) => (
  <label htmlFor={htmlFor}>
    {label}
    <input
      placeholder={placeholder}
      className={type === 'text' ? styles.textInput : styles.radioInput}
      type={type}
      id={htmlFor}
      name={name}
      onChange={handleInputChange}
      value={value}
    />
  </label>
)

export default FormInput;