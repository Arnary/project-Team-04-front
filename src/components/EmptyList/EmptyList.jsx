import styles from "./EmptyList.module.css";

const EmptyList = ({ children }) => {
  return (
    <div className={styles.emptyList}>
      <p>{children}</p>
    </div>
  );
};

export default EmptyList;
