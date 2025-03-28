import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./IngredientsSection.module.css";
import IngredientsList from '../IngredientsList/IngredientsList';
import IngredientDropdown from '../IngredientDropdown/IngredientDropdown';
import { resetSelectedIngredient } from '../../redux/ingredients/ingredientSlice';
import { ReactComponent as PlusIcon } from '../../img/categories/plus.svg';

const IngredientsSection = ({
                                control,
                                errors,
                                selectedIngredients,
                                setSelectedIngredients,
                                setValue
                            }) => {
    const dispatch = useDispatch();
    const [ingredientAmount, setIngredientAmount] = useState("");
    const selectedIngredient = useSelector((state) => state.ingredients.selectedIngredient);

    const removeIngredient = (indexToRemove) => {
        const updatedIngredients = selectedIngredients.filter(
            (_, index) => index !== indexToRemove
        );
        setSelectedIngredients(updatedIngredients);
        setValue("ingredients", updatedIngredients);
    };

    const addIngredient = () => {
        if (!selectedIngredient || !ingredientAmount.trim()) return;

        const newIngredient = {
            id: selectedIngredient.id,
            name: selectedIngredient.name,
            img: selectedIngredient.img,
            amount: ingredientAmount
        };

        const updatedIngredients = [...selectedIngredients, newIngredient];
        setSelectedIngredients(updatedIngredients);
        setValue("ingredients", updatedIngredients);

        dispatch(resetSelectedIngredient());
        setIngredientAmount("");
    };

    return (
        <div className={styles["ingredients-section"]}>
            <label className={styles["dropdown-label"]}>INGREDIENTS</label>

            <div className={styles["ingredients-controls"]}>
                <div className={styles["input-row"]}>
                    <IngredientDropdown />

                    <input
                        type="text"
                        className={styles["quantity-input"]}
                        placeholder="Enter quantity"
                        value={ingredientAmount}
                        onChange={(e) => setIngredientAmount(e.target.value)}
                    />
                </div>

                <button
                    type="button"
                    className={styles["add-button"]}
                    onClick={addIngredient}
                    disabled={!selectedIngredient || !ingredientAmount.trim()}
                >
                    ADD INGREDIENT <PlusIcon className={styles["plus-icon"]} />
                </button>
            </div>

            <IngredientsList
                selectedIngredients={selectedIngredients}
                removeIngredient={removeIngredient}
            />

            {errors.ingredients && (
                <p className={styles['error-message']}>{errors.ingredients.message}</p>
            )}
        </div>
    );
};

export default IngredientsSection;