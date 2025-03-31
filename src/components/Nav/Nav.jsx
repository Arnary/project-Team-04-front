import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) return null;

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navLink} ${styles.homeLink} ${isActive ? styles.active : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recipe/add"
            className={({ isActive }) =>
              `${styles.navLink} ${styles.addLink} ${isActive ? styles.active : ""}`
            }
          >
            Add Recipe
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
