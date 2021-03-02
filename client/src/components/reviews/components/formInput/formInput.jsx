import React from 'react';
import styles from './formInput.css';

const FormInput = ({htmlFor, type, name, handleInputChange, value, label}) => (
  <label htmlFor={htmlFor} >
    {label}
    <input
      className={type === 'text' ? styles.textInput : ''}
      type={type}
      id={htmlFor}
      name={name}
      onChange={handleInputChange}
      value={value}
    />

  </label>
)

export default FormInput;