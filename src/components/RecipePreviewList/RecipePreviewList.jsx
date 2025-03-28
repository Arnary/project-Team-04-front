import styles from "./RecipePreviewList.module.css";
import RecipePreview from "../RecipePreview/RecipePreview";

const RecipePreviewList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={index}>
          <RecipePreview recipe={item} />
        </li>
      ))}
    </ul>
  );
};

export default RecipePreviewList;
