import PathInfo from "../../components/PathInfo/PathInfo";
import MainTitle from "../../components/MainTitle/MainTitle";
import Subtitle from "../../components/Subtitle/Subtitle";
import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm";
import styles from './AddRecipePage.module.css';

const AddRecipePage = () => {
    return (
        <div className={styles.addRecipePage}>
            <PathInfo currentPage="Add Recipe" />
            <MainTitle>Add Recipe</MainTitle>
            <Subtitle>Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us.</Subtitle>
            <AddRecipeForm />
        </div>
    );
};

export default AddRecipePage;