import React, { useState, useEffect } from "react";
import styles from "./CookingTimeInput.module.css";
import { ReactComponent as MinusIcon } from '../../img/categories/minus.svg';
import { ReactComponent as PlusIcon } from '../../img/categories/plus.svg';

const timeOptions = [5, 10, 20, 30, 40, 50, 60, 80, 100, 120, 140, 160];

const CookingTimeInput = ({ watch, setValue, errors }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isOpen, setIsOpen] = useState(false);
    const cookingTime = watch("cookingTime") || 10; // Значення за замовчуванням 10

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleTimeChange = (newValue) => {
        setValue("cookingTime", Math.max(5, Math.min(160, newValue)));
    };

    return (
        <div className={styles["cooking-time-container"]}>
            <label className={styles["dropdown-label"]}>COOKING TIME</label>
            <div className={styles["time-input-wrapper"]}>
                <div className={styles["time-control-group"]}>
                    <button
                        type="button"
                        className={styles["time-button"]}
                        onClick={() => handleTimeChange(cookingTime - 5)}
                    >
                        <MinusIcon />
                    </button>

                    {isMobile ? (
                        <div
                            className={styles["custom-select"]}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className={styles["selected-text"]}>
                                {cookingTime} min {/* Завжди показуємо "min" */}
                            </span>

                            {isOpen && (
                                <ul className={styles["custom-options"]}>
                                    {timeOptions.map((time) => (
                                        <li
                                            key={time}
                                            onClick={() => {
                                                handleTimeChange(time);
                                                setIsOpen(false);
                                            }}
                                        >
                                            {time} min
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ) : (
                        <div className={styles["desktop-time-display"]}>
                            {cookingTime} min
                        </div>
                    )}

                    <button
                        type="button"
                        className={styles["time-button"]}
                        onClick={() => handleTimeChange(cookingTime + 5)}
                    >
                        <PlusIcon />
                    </button>
                </div>
            </div>

            {errors.cookingTime && <p className={styles["error-message"]}>{errors.cookingTime.message}</p>}
        </div>
    );
};

export default CookingTimeInput;