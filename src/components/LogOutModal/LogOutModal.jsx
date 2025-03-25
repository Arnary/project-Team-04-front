import React from 'react';
import Modal from '../Modal/Modal';
import styles from './LogOutModal.module.css';

const LogOutModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.logOutModal}>
      <h2 className={styles.title}>Confirm Log Out</h2>
      <p className={styles.message}>Are you sure you want to log out?</p>
      <div className={styles.buttonGroup}>
        <button onClick={onClose} className={styles.cancelButton}>Cancel</button>
        <button onClick={onConfirm} className={styles.confirmButton}>Log Out</button>
      </div>
    </Modal>
  );
};

export default LogOutModal;