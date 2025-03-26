import React, { useRef, useEffect } from "react";
import styles from "./DescriptionTextarea.module.css";

const DescriptionTextarea = ({ name, label, placeholder, register, errors, watch, setValue }) => {
    const textareaRef = useRef(null);
    const value = watch(name);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [value]);

    return (
        <div className={styles["textarea-container"]}>
            {label && <label className={styles["textarea-label"]}>{label}</label>}

            <textarea
                ref={textareaRef}
                className={styles.textarea}
                {...register(name)}
                placeholder={placeholder}
                maxLength={200}
                onChange={(e) => setValue(name, e.target.value.slice(0, 200))}
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
            <div className={styles["char-count"]}>
                <span className={styles["char-counter"]}>{value?.length || 0}</span>/200
            </div>
            {errors[name] && (
                <p className={styles["error-message"]}>{errors[name].message}</p>
            )}
        </div>
    );
};

export default DescriptionTextarea;
