import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './SignInModal.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignInModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      // Example: POST request to /api/auth/login
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Check your credentials or try again.');
      }

      const data = await response.json();
      // Store token, if provided
      localStorage.setItem('token', data.token);

      // Clear fields and close modal
      setEmail('');
      setPassword('');
      onClose();
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMsg(error.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.signInModal}>
      <h2 className={styles.title}>SIGN IN</h2>

      {errorMsg && <p className={styles.error}>{errorMsg}</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email*"
          className={styles.input}
          required
        />

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

        {/* The pill-shaped, light-gray Sign In button */}
        <button type="submit" className={styles.signInButton}>
          SIGN IN
        </button>
      </form>

      <p className={styles.footerText}>
        Don't have an account? <a href="#signup">Create an account</a>
      </p>
    </Modal>
  );
};

export default SignInModal;