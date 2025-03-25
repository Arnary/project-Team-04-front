import React, { useState } from 'react';
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import SignInModal from '../../components/SignInModal/SignInModal';
import SignUpModal from '../../components/SignUpModal/SignUpModal';
import LogOutModal from '../../components/LogOutModal/LogOutModal';

const HomePage = () => {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLogOutOpen, setLogOutOpen] = useState(false);

  const handleLogOutConfirm = () => {
    console.log("User logged out");
    setLogOutOpen(false);
  };

  // Switch from Sign Up to Sign In
  const switchToSignIn = () => {
    setSignUpOpen(false);
    setSignInOpen(true);
  };

  return (
    <>
      <Hero
        onSignIn={() => setSignInOpen(true)}
        onSignUp={() => setSignUpOpen(true)}
        onLogOut={() => setLogOutOpen(true)}
      />
      <Categories />
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setSignInOpen(false)}
      />
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setSignUpOpen(false)}
        onSwitchToSignIn={switchToSignIn}
      />
      <LogOutModal
        isOpen={isLogOutOpen}
        onClose={() => setLogOutOpen(false)}
        onConfirm={handleLogOutConfirm}
      />
    </>
  );
};

export default HomePage;