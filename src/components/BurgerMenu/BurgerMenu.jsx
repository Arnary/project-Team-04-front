import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./BurgerMenu.module.css";
import heroImg1x from "../../img/dish.png";
import heroImg2x from "../../img/dish-2x.png";
import dishImg1x from "../../img/hero-image.png";
import dishImg2x from "../../img/hero-image-2x.png";

const BurgerMenu = () => {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const isDark = location.pathname === "/" || location.pathname === "/recipes";
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  if (!user) return null;

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        className={styles.burgerButton}
      >
        <svg
          className={`${styles.burgerIcon} ${
            isDark ? styles.darkIcon : styles.lightIcon
          }`}
          width="28"
          height="28"
        >
          <use href="/img/icons.svg#burger-menu"></use>
        </svg>
      </button>
      <div className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.menuHeader}>
          <Logo onClick={toggleMenu} />
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Close menu"
            className={styles.closeBtn}
          >
            <svg className={styles.closeIcon} width="24" height="24">
              <use href="/img/icons.svg#icon-x-white"></use>
            </svg>
          </button>
        </div>
        <nav className={styles.mobileNav}>
          <NavLink to="/" className={styles.mobileNavItem} onClick={toggleMenu}>
            HOME
          </NavLink>
          <NavLink
            to="/recipe/add"
            className={styles.mobileNavItem}
            onClick={toggleMenu}
          >
            ADD RECIPE
          </NavLink>
        </nav>
        <div className={styles.menuImages}>
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
    </>
  );
};

export default BurgerMenu;
