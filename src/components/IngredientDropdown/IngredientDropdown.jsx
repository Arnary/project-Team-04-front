import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIngredients, selectIngredient } from '../../redux/ingredients/ingredientSlice';
import css from "./IngredientDropdown.module.css";

const IngredientDropdown = () => {
    const dispatch = useDispatch();
    const ingredients = useSelector((state) => state.ingredients.list);
    const selectedIngredient = useSelector((state) => state.ingredients.selectedIngredient);
    const status = useSelector((state) => state.ingredients.status);
    const [isOpen, setIsOpen] = useState(false);

    const sortedIngredients = useMemo(() => {
        return [...ingredients].sort((a, b) => a.name.localeCompare(b.name));
    }, [ingredients]);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchIngredients());
        }
    }, [status, dispatch]);

    const handleSelect = (ingredient) => {
        dispatch(selectIngredient(ingredient.name));
        setIsOpen(false);
    };

    return (
        <div className={css["custom-select-container"]}>
            <div className={css["custom-select"]} onClick={() => setIsOpen(!isOpen)}>
        <span className={css[selectedIngredient ? 'selected-text' : 'placeholder-text']}>
            {selectedIngredient ? selectedIngredient.name : 'Ingredient'}
            <svg className={css["arrow-icon"]} >
            {isOpen ? (<use href='/img/icons.svg#icon-chevron-up-black'></use>) : (
                <use href='/img/icons.svg#icon-chevron-down-black'></use>)}
          </svg>
        </span>
            </div>
            {isOpen && (
                <ul className={css["custom-options"]}>
                    {status !== 'loading' && status !== 'failed' &&
                        sortedIngredients.map((ingredient) => (
                            <li
                                key={ingredient.id}
                                onClick={() => handleSelect(ingredient)}
                            >
                                {ingredient.name}
                            </li>
                        ))}
                    {status === 'loading' &&
                        <li className={css["loading-error-text"]}>Loading ingredients...</li>
                    }
                    {status === 'failed' &&
                        <li className={css["loading-error-text"]}>Oops, something went wrong, please reload the page...</li>
                    }
                </ul>
            )}
        </div>
    );
};

export default IngredientDropdown;