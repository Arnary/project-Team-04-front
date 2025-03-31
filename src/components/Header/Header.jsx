import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthBar from "../AuthBar/AuthBar";
import UserBar from "../UserBar/UserBar";
import Nav from "../Nav/Nav";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../Logo/Logo";
import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import LogOutModal from "../LogOutModal/LogOutModal";
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();
  const isDark = location.pathname === "/" || location.pathname === "/recipes";

  const user = useSelector((state) => state.auth.user);
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLogOutOpen, setLogOutOpen] = useState(false);

  const switchToSignIn = () => {
    setSignUpOpen(false);
    setSignInOpen(true);
  };

  const switchToSignUp = () => {
    setSignInOpen(false);
    setSignUpOpen(true);
  };

  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.headerContainer}>
        <Logo />
        <div className={styles.centerNav}>
          <Nav />
        </div>
        <div className={styles.rightBlock}>
          {user ? (
            <UserBar openLogOutModal={() => setLogOutOpen(true)} />
          ) : (
            <AuthBar
              openSignInModal={() => setSignInOpen(true)}
              openSignUpModal={() => setSignUpOpen(true)}
            />
          )}
          <BurgerMenu />
        </div>
      </div>

      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setSignInOpen(false)}
        onSwitchToSignUp={switchToSignUp}
      />
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setSignUpOpen(false)}
        onSwitchToSignIn={switchToSignIn}
      />
      <LogOutModal isOpen={isLogOutOpen} onClose={() => setLogOutOpen(false)} />
    </header>
  );
};

export default Header;
