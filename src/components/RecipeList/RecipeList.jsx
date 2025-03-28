import { useDispatch, useSelector } from "react-redux";

import { RecipeCard } from "../RecipeCard/RecipeCard";
import { selectFavoriteRecipes } from "../../redux/recipes/selectors";

import css from "./RecipeList.module.css";

const RecipeList = ({ recipes, className, cardClassName }) => {
	const dispatch = useDispatch();
	const favoriteRecipes = useSelector(selectFavoriteRecipes);

	// const isFavorite = (id) => {
	// 	const isFavorite = favoriteRecipes.findIndex(
	// 		(recipe) => recipe.recipeId === id
	// 	);
	// 	return isFavorite !== -1;
	// };

	return (
		<ul className={className ? className : css["recipes-list"]}>
			{recipes.map((recipe) => (
				<li key={recipe.id} className={css["recipes-item"]}>
					<RecipeCard 
						recipe={recipe}
						className={cardClassName}
						// isFavorite={isFavorite(recipe.id)}
					/>
				</li>
			))}
		</ul>
	);
};

export default RecipeList;
