import { useEffect } from "react";
import PopularRecipes from "../../components/PopularRecipes/PopularRecipes";
import PathInfo from "../../components/RecipePage/PathInfo/PathInfo";
import RecipeIngredients from "../../components/RecipePage/RecipeIngredients/RecipeIngredients";
import RecipeMainInfo from "../../components/RecipePage/RecipeMainInfo/RecipeMainInfo";
import RecipePreparation from "../../components/RecipePage/RecipePreparation/RecipePreparation";
import style from "./RecipePage.module.css"; // імпорт стилів
import { useDispatch } from "react-redux";
import { fetchPopularRecipes } from "../../redux/popularRecipes/operations";

const mockRecipe = {
  image: "/img/salmon.jpg",
  title: "Salmon Avocado Salad",
  category: "Seafood",
  time: "40 min",
  description:
    "A healthy salad recipe that's big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette.",
  author: {
    name: "Nadia",
    avatar: "/img/author-avatar.png",
    id: "user123",
  },
  ingredients: [
    {
      id: 1,
      name: "Salmon",
      quantity: "400 g",
      image: "/img/ingredients/salmon.png",
    },
    {
      id: 2,
      name: "Avocado",
      quantity: "3",
      image: "/img/ingredients/avocado.png",
    },
    {
      id: 3,
      name: "Cucumber",
      quantity: "1",
      image: "/img/ingredients/cucumber.png",
    },
    {
      id: 4,
      name: "Spinach",
      quantity: "400 g",
      image: "/img/ingredients/spinach.png",
    },
    {
      id: 5,
      name: "Mint",
      quantity: "4 tbs",
      image: "/img/ingredients/mint.png",
    },
    { id: 6, name: "Lime", quantity: "1", image: "/img/ingredients/lime.png" },
    {
      id: 7,
      name: "Honey",
      quantity: "2 tsp",
      image: "/img/ingredients/honey.png",
    },
    {
      id: 8,
      name: "Olive oil",
      quantity: "3 tbs",
      image: "/img/ingredients/olive-oil.png",
    },
  ],
  instructions:
    "Then drizzled with a homemade lemon vinaigrette. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette.",
  isFavorite: false,
};

const RecipePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularRecipes())
  }, [dispatch]);
  
  return (
    <main className="container">
      <section className={style.breadcrumbs}>
        <PathInfo />
      </section>

      <section className={style.recipeSection}>
  <div className={style.recipeRow}>
    <RecipeMainInfo recipe={mockRecipe} />
    <RecipeIngredients ingredients={mockRecipe.ingredients} />
  </div>
</section>


      <section className={style.recipeSection}>
        <RecipePreparation instructions={mockRecipe.instructions} />
      </section>
      <PopularRecipes />
    </main>
  );
};

export default RecipePage;
