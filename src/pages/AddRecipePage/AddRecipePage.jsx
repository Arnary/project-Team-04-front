import PathInfo from "../../components/PathInfo/PathInfo";
import MainTitle from "../../components/MainTitle/MainTitle";
import Subtitle from "../../components/Subtitle/Subtitle";
import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm";
import styles from './AddRecipePage.module.css';
import style from '../../components/App.module.css';

const AddRecipePage = () => {
    return (
        <section className={styles["add-recipe-section"]}>
            <div className={style.container}>
                <PathInfo currentPage="ADD RECIPE" />
                <MainTitle>Add Recipe</MainTitle>
                <Subtitle>Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us.</Subtitle>
                <AddRecipeForm />
            </div>
        </section>
    );
};

export default AddRecipePage;