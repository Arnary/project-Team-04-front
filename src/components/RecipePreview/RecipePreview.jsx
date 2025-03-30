import { MdOutlineArrowOutward } from "react-icons/md";
import { SlTrash } from "react-icons/sl";
import { useDispatch } from "react-redux";

import {
  deleteRecipe,
  deleteFavoriteRecipe,
} from "../../redux/recipes/operations";

import style from "./RecipePreview.module.css";

const RecipePreview = ({ recipe, isOwnProfile, listType }) => {
  const dispatch = useDispatch();
  const { id, title, description, thumb } = recipe;

  const handleDelete = () => {
    if (listType === "recipes") {
      if (window.confirm("Are you sure you want to delete this recipe?")) {
        dispatch(deleteRecipe(id));
      }

      return;
    }

    if (listType === "favorites") {
      if (
        window.confirm(
          "Are you sure you want to remove this recipe from favorites?"
        )
      ) {
        dispatch(deleteFavoriteRecipe(id));
      }
    }
  };

  return (
    <div className={style.recipeCard}>
      <div className={style.imageContainer}>
        <img src={thumb} alt={title} className={style.image} />
      </div>

      <div className={style.content}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
      </div>

      <div className={style.actions}>
        <a
          href={`/recipe/${id}`}
          className={`${style.button} ${style.viewButton}`}
        >
          <MdOutlineArrowOutward />
        </a>
        {isOwnProfile && (
          <button className={style.button} type="button" onClick={handleDelete}>
            <SlTrash />
          </button>
        )}
      </div>
    </div>
  );
};

export default RecipePreview;
