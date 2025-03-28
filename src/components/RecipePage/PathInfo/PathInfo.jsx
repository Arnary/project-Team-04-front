import { Link } from "react-router-dom";
import styles from "./PathInfo.module.css";

const PathInfo = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.home}>HOME</Link>
      <span className={styles.separator}>/</span>
      <span className={styles.current}>{title}</span>
    </div>
  );
};

export default PathInfo;
