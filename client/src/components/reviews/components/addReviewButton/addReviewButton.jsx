import React from 'react';
import styles from './addReviewButton.css';

const AddReviewButton = ({ handleOpenModalButtonClick }) => (
  <button
    type="button"
    className={styles.buttonStyle}
    onClick={handleOpenModalButtonClick}
  >
    ADD A REVIEW
  </button>
);

export default AddReviewButton;
