import React from 'react';
import Styles from './Modal.css';

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? Styles.displayBlock : Styles.displayNone;

  return (
    <div className={showHideClassName}>
      <section className={Styles.modalMain}>
        <p>Hi</p>
        <button type="button" onClick={() => handleClose(false)}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
