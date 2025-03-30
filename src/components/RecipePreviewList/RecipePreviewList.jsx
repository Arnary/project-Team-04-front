import styles from "./RecipePreviewList.module.css";
import RecipePreview from "../RecipePreview/RecipePreview";

const RecipePreviewList = ({ items, isOwnProfile, listType }) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={index}>
          <RecipePreview
            recipe={item}
            isOwnProfile={isOwnProfile}
            listType={listType}
          />
        </li>
      ))}
    </ul>
  );
};

export default RecipePreviewList;
