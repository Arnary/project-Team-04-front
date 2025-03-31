import { useDispatch } from "react-redux";
import PopularRecipes from "../../components/PopularRecipes/PopularRecipes";
import RecipeInfo from "../../components/RecipePage/RecipeInfo/RecipeInfo";
import { fetchPopularRecipes } from "../../redux/popularRecipes/operations";
import { useEffect } from "react";
// import style from "./RecipePage.module.css";

const RecipePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularRecipes())
  }, [dispatch]);

  return (
    <>
      <RecipeInfo />
      <PopularRecipes />
    </>
  );
};

export default RecipePage;
