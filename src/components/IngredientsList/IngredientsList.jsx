import React from 'react';
import styles from './IngredientsList.module.css';

const IngredientsList = ({ selectedIngredients, removeIngredient }) => {
    if (selectedIngredients.length === 0) return null;

    return (
        <ul className={styles['ingredient-list']}>
            {selectedIngredients.map((ing, index) => (
                <li key={index} className={styles['ingredient-item']}>
                    {ing.img && (
                        <img
                            src={ing.img}
                            alt={ing.name}
                            className={styles['ingredient-image']}
                        />
                    )}
                    <div className={styles['ingredient-info']}>
                        <span className={styles['ingredient-name']}>{ing.name}</span>
                        <span className={styles['ingredient-amount']}>{ing.amount}</span>
                    </div>
                    <button
                        type="button"
                        className={styles['remove-button']}
                        onClick={() => removeIngredient(index)}
                        aria-label={`Remove ${ing.name}`}
                    >
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default IngredientsList;