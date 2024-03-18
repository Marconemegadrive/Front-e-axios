/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './components/Popup.module.css';

const Popup = ({ isOpen, handleClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.containerPopup}>
      <div className={styles.contentPopup}>
        {children}
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Popup;