import React, { useState } from 'react';
import styles from "./IngredientsSection.module.css";
import IngredientsList from '../IngredientsList/IngredientsList';
import IngredientDropdown from '../IngredientDropdown/IngredientDropdown';

const IngredientsSection = ({
                                control,
                                errors,
                                ingredientsList,
                                selectedIngredients,
                                setSelectedIngredients,
                                setValue
                            }) => {
    const [ingredientAmount, setIngredientAmount] = useState("");
    const [selectedIngredient, setSelectedIngredient] = useState(null);

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

        setSelectedIngredient(null);
        setIngredientAmount("");
    };

    const handleIngredientSelect = (ingredient) => {
        setSelectedIngredient(ingredient);
    };

    return (
        <div className={styles["ingredients-section"]}>
            <label className={styles["dropdown-label"]}>INGREDIENTS</label>

            <div className={styles["ingredients-controls"]}>
                <IngredientDropdown
                    onSelect={handleIngredientSelect}
                />

                <input
                    type="text"
                    className={styles["quantity-input"]}
                    placeholder="Enter quantity"
                    value={ingredientAmount}
                    onChange={(e) => setIngredientAmount(e.target.value)}
                />

                <button
                    type="button"
                    className={styles["add-button"]}
                    onClick={addIngredient}
                    disabled={!selectedIngredient || !ingredientAmount.trim()}
                >
                    Add +
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