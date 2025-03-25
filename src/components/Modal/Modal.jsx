import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, children, className = '' }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.modal} ${className}`} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <FaTimes />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;