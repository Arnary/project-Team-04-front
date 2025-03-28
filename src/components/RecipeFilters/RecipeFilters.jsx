import css from "./RecipeFilters.module.css";

import IngredientDropdown from "../IngredientDropdown/IngredientDropdown";
import AreaDropdown from "../AreaDropdown/AreaDropdown";
import { fetchRecipesByFilters } from "../../redux/recipes/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const RecipeFilters = () => {
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);
	const selectedArea = useSelector((state) => state.areas.selectedArea);
  const selectedIngredient = useSelector((state) => state.ingredients.selectedIngredient);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipesByFilters({ 
      area: selectedArea, 
      ingredient: selectedIngredient, 
      category: selectedCategory 
    }));
  }, [selectedArea, selectedIngredient, selectedCategory, dispatch]);

  return (
    <div className={ css.container }>
      <IngredientDropdown />
      <AreaDropdown />
    </div>
  );
};

export default RecipeFilters;