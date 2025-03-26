import React, { useState } from 'react';
import styles from "./FormButtons.module.css";
import { ReactComponent as TrashIcon } from '../../img/categories/trash.svg';

const FormButtons = ({
                         reset,
                         setImagePreview,
                         setSelectedIngredients,
                         setSelectedIngredient
                     }) => {
    const [isClearPressed, setIsClearPressed] = useState(false);
    const [isPublishPressed, setIsPublishPressed] = useState(false);

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
                onClick={(e) => {
                    handleReset();
                    setIsClearPressed(true);
                    setTimeout(() => setIsClearPressed(false), 200);
                }}
                className={`
                    ${styles["btn"]} 
                    ${styles["btn--clear"]} 
                    ${isClearPressed ? styles["btn--pressed"] : ''}
                `}
            >
                <TrashIcon className={styles["btn-icon"]} />
            </button>
            <button
                type="submit"
                onClick={(e) => {
                    setIsPublishPressed(true);
                    setTimeout(() => setIsPublishPressed(false), 200);
                }}
                className={`
                    ${styles["btn"]} 
                    ${styles["btn--publish"]} 
                    ${isPublishPressed ? styles["btn--pressed"] : ''}
                `}
            >
                PUBLISH
            </button>
        </div>
    );
};

export default FormButtons;