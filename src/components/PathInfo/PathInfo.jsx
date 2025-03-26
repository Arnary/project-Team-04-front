import React from "react";
import { Link } from "react-router-dom";
import styles from "./PathInfo.module.css";

const PathInfo = ({ currentPage }) => {
    return (
        <nav className={styles["path-container"]}>
            <Link to="/" className={styles["path-link"]}>Home</Link>
            <span className={styles["path-separator"]}>/</span>
            <span className={styles["current-page"]}>{currentPage}</span>
        </nav>
    );
};

export default PathInfo;
