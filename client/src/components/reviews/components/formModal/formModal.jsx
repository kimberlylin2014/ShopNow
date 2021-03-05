import React from 'react';
import styles from './formModal.css';

const FormModal = ({modalDisplay, handleCloseModalButtonClick}) => (
    <div id="myModal" className={styles.modal}  style={{display: modalDisplay}} >
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={handleCloseModalButtonClick}>&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
);

export default FormModal;
