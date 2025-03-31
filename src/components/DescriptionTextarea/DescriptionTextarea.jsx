import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./DescriptionTextarea.module.css";

const DescriptionTextarea = ({ name, label, placeholder, register, errors, watch, setValue }) => {
    const value = watch(name);

    return (
        <div className={`${styles["textarea-container"]} ${errors[name] ? styles["error"] : ""}`}>
            {label && <label className={styles["textarea-label"]}>{label}</label>}

            <TextareaAutosize
                className={styles.textarea}
                {...register(name)}
                placeholder={placeholder}
                maxLength={200}
                value={value || ""}
                onChange={(e) => setValue(name, e.target.value.slice(0, 200))}
                minRows={1}
                maxRows={20}
                style={{
                    resize: "none",
                    overflow: "hidden",
                    border: "none",
                    borderBottom: "1px solid #BFBEBE",
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
