import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIngredients, selectIngredient } from '../../redux/ingredientSlice';
import css from "./IngredientDropdown.module.css";

const IngredientDropdown = ({ onSelect, selectedIngredient }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients.list);
  const status = useSelector((state) => state.ingredients.status);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchIngredients());
    }
  }, [status, dispatch]);

  const handleSelect = (ingredientId) => {
    const ingredient = ingredients.find(ing => ing.id === ingredientId);
    onSelect(ingredient);
    setIsOpen(false);
  };

  return (
      <div className={css["custom-select-container"]}>
        <div className={css["custom-select"]} onClick={() => setIsOpen(!isOpen)}>
                <span className={css[selectedIngredient ? 'selected-text' : 'placeholder-text']}>
                    {selectedIngredient ? selectedIngredient.name : 'Add the ingredient'}
                  <svg className={css["arrow-icon"]}>
                        {isOpen ? (<use href='/img/icons.svg#icon-chevron-up-black'></use>) : (
                            <use href='/img/icons.svg#icon-chevron-down-black'></use>)}
                    </svg>
                </span>
        </div>
        {isOpen && (
            <ul className={css["custom-options"]}>
              {status !== 'loading' && status !== 'failed' &&
                  ingredients.map((ingredient) => (
                          <li key={ingredient.id} onClick={() => handleSelect(ingredient.id)}>
                            {ingredient.name}
                          </li>
                      )
                  )}
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
