import React from 'react';
import styles from './Hero.module.css';
import heroImg1x from '../../img/dish.png';
import heroImg2x from '../../img/dish-2x.png';
import dishImg1x from '../../img/hero-image.png';
import dishImg2x from '../../img/hero-image-2x.png';

const Hero = ({ onSignIn, onSignUp, onLogOut }) => {
  return (
    <section className={styles.hero}>
      {/* Top Bar with logo on left, sign in/up pill on right, optional logout button */}
      <div className={styles.topBar}>
        <div className={styles.logo}>foodies</div>

        <div className={styles.authArea}>
          {/* Two-segment pill for Sign In / Sign Up */}
          <div className={styles.authToggle}>
            <button className={styles.signIn} onClick={onSignIn}>
              Sign In
            </button>
            <button className={styles.signUp} onClick={onSignUp}>
              Sign Up
            </button>
          </div>
          {/*<button className={styles.logOutBtn} onClick={onLogOut}>*/}
          {/*  Log Out*/}
          {/*</button>*/}
        </div>
      </div>

      {/* Main hero content */}
      <div className={styles.heroContent}>
        <h1 className={styles.title}>IMPROVE YOUR CULINARY TALENTS</h1>
        <p className={styles.subtitle}>
          Amazing recipes for beginners in the world of cooking, enveloping you in the aromas and tastes of various cuisines.
        </p>
        <button className={styles.addRecipeBtn}>ADD RECIPE</button>

        <div className={styles.images}>
          <img
            className={styles.imageMain}
            src={heroImg1x}
            srcSet={`${heroImg2x} 2x`}
            alt="Main dish"
          />
          <img
            className={styles.imageSecondary}
            src={dishImg1x}
            srcSet={`${dishImg2x} 2x`}
            alt="Dessert"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;