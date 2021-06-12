import React from 'react';
import styles from './formModal.css';
import FormPostReview from '../formPostReview/formPostReview.jsx';

const FormModal = ({
  modalDisplay,
  handleCloseModalButtonClick,
  metaReview,
  productInfo,
  addReview
}) => (
  <div id="myModal" className={styles.modal} style={{ display: modalDisplay }}>
    <div className={styles.modalContent}>
      <span
        className={styles.close}
        onClick={handleCloseModalButtonClick}
        role="button"
        onKeyPress={handleCloseModalButtonClick}
        tabIndex={0}
      >
        &times;
      </span>
      <FormPostReview
        metaReview={metaReview}
        productInfo={productInfo}
        addReview={addReview}
        handleCloseModalButtonClick={handleCloseModalButtonClick}
      />
    </div>
  </div>
);

export default FormModal;
