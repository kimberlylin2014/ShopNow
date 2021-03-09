import React from 'react';
import styles from './formValidationMessage.css';

const FormValidationMessage = ({color = '#bd2000', text}) => {
  let message = '';
  if (text) {
    const list = Object.entries(text);
    message = list.filter((arr) => {
      return arr[1] === false;
    }).map((result, index) => {
      return <li key={index}>{result[0]}</li>;
    });
  }
  return (
    <div style={{color: color}}>
      <div className={styles.formValidationMessageText}>
        {text ? 'You must enter the following to successfully submit review:' : null}
        <ul>{message}</ul>
      </div>
    </div>
  );
};

export default FormValidationMessage;