import React, { useRef, useEffect } from "react";
import styles from "./DescriptionTextarea.module.css";

const DescriptionTextarea = ({ register, errors, watch, setValue }) => {
    const textareaRef = useRef(null);
    const description = watch("description");

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto"; // Скидаємо висоту перед підрахунком
            textarea.style.height = `${textarea.scrollHeight}px`; // Встановлюємо нову висоту
        }
    }, [description]); // Виконується щоразу при зміні значення

    return (
        <div className={styles["textarea-container"]}>
            <textarea
                ref={textareaRef}
                className={styles.textarea}
                {...register("description")}
                placeholder="Enter a description of the dish"
                maxLength={200}
                onChange={(e) => {
                    setValue("description", e.target.value.slice(0, 200));
                }}
                rows="1"
                style={{
                    resize: "none",
                    overflow: "hidden",
                    minHeight: "40px",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    outline: "none",
                }}
            />
            {/* Лічильник символів тепер у верхньому правому куті */}
            <div className={styles["char-count"]}>
                <span className={styles["char-counter"]}>{description?.length || 0}</span>/200
            </div>
            {errors.description && (
                <p className={styles["error-message"]}>{errors.description.message}</p>
            )}
        </div>
    );
};

export default DescriptionTextarea;
