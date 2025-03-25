import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './SignUpModal.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUpModal = ({ isOpen, onClose, onSwitchToSignIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed. Please try again.');
      }

      const data = await response.json();
      console.log('User registered successfully:', data);
      // Optionally, you could automatically switch to sign in mode:
      // onSwitchToSignIn();
      onClose();
    } catch (error) {
      console.error('Error during registration:', error);
      setErrorMsg(error.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.signUpModal}>
      <h2 className={styles.title}>SIGN UP</h2>

      {errorMsg && <p className={styles.error}>{errorMsg}</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name*"
            className={styles.input}
            required
          />
        </label>

        <label className={styles.label}>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email*"
            className={styles.input}
            required
          />
        </label>

        <label className={styles.label}>
          <div className={styles.passwordInputWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={styles.input}
              required
            />
            <button
              type="button"
              className={styles.togglePassword}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </label>

        <button type="submit" className={styles.signUpButton}>
          SIGN UP
        </button>
      </form>

      <p className={styles.footerText}>
        I already have an account? <a href="#signin">Sign in</a>
      </p>
    </Modal>
  );
};

export default SignUpModal;