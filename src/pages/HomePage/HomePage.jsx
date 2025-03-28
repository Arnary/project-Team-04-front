import React, { useState } from "react";
import css from "./HomePage.module.css";
import SignInModal from "../../components/SignInModal/SignInModal";
import SignUpModal from "../../components/SignUpModal/SignUpModal";
import LogOutModal from "../../components/LogOutModal/LogOutModal";
import Hero from "../../components/Hero/Hero";
import { Outlet } from 'react-router-dom';
import Testimonials from "../../components/Testimonials/Testimonials";


const HomePage = () => {

  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLogOutOpen, setLogOutOpen] = useState(false);

  // This function closes the SignUp modal and opens the SignIn modal.
  const switchToSignIn = () => {
    setSignUpOpen(false);
    setSignInOpen(true);
  };
  // This function closes the SignIn modal and opens the SignUp modal.
  const switchToSignUp = () => {
    setSignUpOpen(true);
    setSignInOpen(false);
  };

  return (
    <>
      <Hero />
      <div className={css.buttons}>
        <button onClick={() => setSignInOpen(true)}>Sign In</button>
        <button onClick={() => setSignUpOpen(true)}>Sign Up</button>
        <button onClick={() => setLogOutOpen(true)}>Log Out</button>
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
      <LogOutModal
        isOpen={isLogOutOpen}
        onClose={() => setLogOutOpen(false)}
      />
      <Outlet />
      <Testimonials />
    </>
  );
};

export default HomePage;
