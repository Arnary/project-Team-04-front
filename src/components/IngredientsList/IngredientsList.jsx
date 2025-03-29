import React from 'react';
import styles from './IngredientsList.module.css';
import { ReactComponent as XIcon } from '../../img/categories/x.svg';

const IngredientsList = ({ selectedIngredients, removeIngredient }) => {
    if (selectedIngredients.length === 0) return null;

    return (
        <ul className={styles['ingredient-list']}>
            {selectedIngredients.map((ing, index) => (
                <li key={index} className={styles['ingredient-item']}>
                    <div className={styles['ingredient-image-wrapper']}>
                        <img
                            src={ing.img}
                            alt={ing.name}
                            className={styles['ingredient-image']}
                        />
                    </div>
                    <div className={styles['ingredient-details']}>
                        <span className={styles['ingredient-name']}>{ing.name}</span>
                        <span className={styles['ingredient-amount']}>{ing.amount}</span>
                    </div>
                    <button
                        type="button"
                        className={styles['remove-button']}
                        onClick={() => removeIngredient(index)}
                        aria-label={`Remove ${ing.name}`}
                    >
                        <XIcon className={styles['remove-icon']} />
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default IngredientsList;