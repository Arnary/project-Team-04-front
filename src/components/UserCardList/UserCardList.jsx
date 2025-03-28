import styles from "./UserCardList.module.css";
import UserCard from "../UserCard/UserCard";

const UserCardList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li className={styles.listItem} key={index}>
          <UserCard user={item} />
        </li>
      ))}
    </ul>
  );
};

export default UserCardList;
