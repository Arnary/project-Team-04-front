import css from "./PopularRecipes.module.css";
import style from "../App.module.css";
import RecipeList from "../RecipeList/RecipeList";
import { useSelector } from "react-redux";


const PopularRecipes = () => {
    const recipes = useSelector((state) => state.popular.list)

    return (
        <section className={css["popular-section"]}>
            <div className={style.container}>
                <h2 className={css.title}>Popular recipes</h2>
                <RecipeList recipes={recipes} className={css["popular-recipes-list"]} cardClassName={css["popular-card"]} />
            </div>
        </section>
    )
}

export default PopularRecipes;