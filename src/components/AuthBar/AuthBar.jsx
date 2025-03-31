import React from "react";
import { useSelector } from "react-redux";
import styles from "./AuthBar.module.css";

const AuthBar = ({ openSignInModal, openSignUpModal, openLogOutModal }) => {
  const user = useSelector((state) => state.auth.user);

  if (user) {
    return (
      <div className={styles.authBar}>
        <span className={styles.welcome}>Welcome, {user.name}!</span>
        <button
          type="button"
          onClick={openLogOutModal}
          className={styles.logoutButton}
        >
          LOGOUT
        </button>
      </div>
    );
  }

  return (
    <div className={styles.authBar}>
      <button
        type="button"
        onClick={openSignInModal}
        className={styles.signInButton}
      >
        SIGN IN
      </button>
      <button
        type="button"
        onClick={openSignUpModal}
        className={styles.signUpButton}
      >
        SIGN UP
      </button>
    </div>
  );
};

export default AuthBar;
