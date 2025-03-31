import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentProfile } from "../../redux/profile/operations";
import styles from "./UserBar.module.css";

const UserBar = ({ openLogOutModal }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.currentProfile);

  useEffect(() => {
    if (!profile) {
      dispatch(fetchCurrentProfile());
    }
  }, [dispatch, profile]);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isDropdownOpen && containerRef.current) {
      setDropdownWidth(containerRef.current.offsetWidth);
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!profile || !profile.name) {
    return null;
  }

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className={styles.userBar} ref={containerRef}>
      <div className={styles.avatarContainer}>
        {profile.avatar ? (
          <img src={profile.avatar} alt={profile.name} className={styles.avatar} />
        ) : (
          <div className={styles.avatarPlaceholder}>?</div>
        )}
      </div>
      <div className={styles.userInfo} onClick={toggleDropdown}>
        <span className={styles.userName}>{profile.name.toUpperCase()}</span>
        <svg className={`${styles.arrowIcon} ${isDropdownOpen ? styles.open : ""}`}>
          <use href="/img/icons.svg#icon-chevron-down-black" />
        </svg>
      </div>
      {isDropdownOpen && (
        <div
          className={styles.dropdownMenu}
          style={{ width: dropdownWidth || "100%" }}
        >
          <Link to={`/user/${profile.id}`} className={styles.dropdownItem}>
            PROFILE
          </Link>
          <button
            type="button"
            className={styles.dropdownItem}
            onClick={openLogOutModal}
          >
            LOG OUT
            <svg className={styles.arrowIconDropdown}>
              <use href="/img/icons.svg#icon-arrow-up-right-white" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserBar;
