import React from 'react';
import styles from './formValidationMessage.css';

const FormValidationMessage = ({color = '#373833', text = ''}) => (
  <div style={{color: color}}>
    <p className={styles.formValidationMessageText}>{text}</p>
  </div>
)

export default FormValidationMessage;