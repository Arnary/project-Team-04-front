import React from 'react';
import { Controller } from "react-hook-form";
import styles from "./ImageUploader.module.css";
import { ReactComponent as CameraIcon } from '../../img/categories/addPicture.svg';

const ImageUploader = ({ control, errors, setValue, imagePreview, setImagePreview }) => {
    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        if (file) {
            field.onChange(file);
            setValue("image", [file]);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <div>
            <div
                className={`${styles["upload-container"]} ${imagePreview ? styles["has-image"] : ''}`}
            >
                {imagePreview ? (
                    <>
                        <div className={styles["image-with-upload"]}>
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className={styles["image-preview"]}
                            />
                        </div>
                        <Controller
                            name="image"
                            control={control}
                            render={({ field }) => (
                                <div className={styles["upload-another-container"]}>
                                    <label className={styles["upload-another-label"]}>
                                        Upload another photo
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleFileChange(e, field)}
                                        />
                                    </label>
                                </div>
                            )}
                        />
                    </>
                ) : (
                    <label className={styles["upload-label"]}>
                        <div className={styles["upload-icon"]}>
                            <CameraIcon />
                        </div>
                        <div>Upload a photo</div>
                        <Controller
                            name="image"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e, field)}
                                />
                            )}
                        />
                    </label>
                )}
                {errors.image && <p style={{color: 'red', fontSize: '0.8rem', marginTop: '4px'}}>{errors.image.message}</p>}
            </div>
            {/*{errors.image && <p style={{color: 'red', fontSize: '0.8rem', marginTop: '4px'}}>{errors.image.message}</p>}*/}
        </div>
    );
};

export default ImageUploader;