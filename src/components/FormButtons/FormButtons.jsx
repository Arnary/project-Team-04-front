import React from 'react';
import styles from "../AddRecipeForm/AddRecipeForm.module.css";
import { ReactComponent as TrashIcon } from '../../img/categories/trashBin.svg';

const FormButtons = ({
                         reset,
                         setImagePreview,
                         setSelectedIngredients,
                         setSelectedIngredient
                     }) => {
    const handleReset = () => {
        reset();
        setImagePreview(null);
        setSelectedIngredients([]);
        setSelectedIngredient(null);
    };

    return (
        <div className={styles["form-buttons"]}>
            <button
                type="reset"
                onClick={handleReset}
                className={styles["btn"]}
            >
                <TrashIcon className={styles["btn-icon"]} />
                Clear
            </button>
            <button
                type="submit"
                className={`${styles["btn"]} ${styles["btn--submit"]}`}
            >
                Publish
            </button>
        </div>
    );
};

export default FormButtons;