import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./AddRecipeForm.module.css";
import { useDispatch } from 'react-redux';
import { selectCategory, resetSelectedCategory } from '../../redux/categories/categorySlice';

import ImageUploader from '../ImageUploader/ImageUploader';
import CookingTimeInput from '../CookingTimeInput/CookingTimeInput';
import IngredientsSection from '../IngredientsSection/IngredientsSection';
import FormButtons from '../FormButtons/FormButtons';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown'
import TitleInput from '../TitleInput/TitleInput';
import DescriptionTextarea from '../DescriptionTextarea/DescriptionTextarea';
import {resetSelectedIngredient} from "../../redux/ingredients/ingredientSlice";

const schema = yup.object().shape({
    image: yup.mixed().required("Recipe image is required"),
    title: yup.string().required("Title is required"),
    description: yup.string().max(200, "Max 200 characters").required("Description is required"),
    category: yup.object().shape({ value: yup.string().required("Category is required") }),
    cookingTime: yup.number().min(5).max(160).required("Cooking time is required"),
    ingredients: yup.array().min(1, "At least one ingredient is required"),
    instructions: yup.string().max(200, "Max 200 characters").required("Instructions are required"),
});

const AddRecipeForm = () => {
    const dispatch = useDispatch();
    const categoryDropdownRef = useRef(null);

    const {
        register,
        control,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            image: null,
            title: "",
            description: "",
            category: null,
            cookingTime: 10,
            ingredients: [],
            instructions: "",
        },
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [categories, setCategories] = useState([]);
    const [ingredientsList, setIngredientsList] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [selectedIngredient, setSelectedIngredient] = useState(null);

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("image", data.image);
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("category", data.category.value);
        formData.append("cookingTime", data.cookingTime);
        formData.append("instructions", data.instructions);
        data.ingredients.forEach((ingredient, index) => {
            formData.append(`ingredients[${index}]`, JSON.stringify(ingredient));
        });

        try {
            const response = await fetch("http://localhost:3001/api/recipes", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Error creating recipe");
            }

            alert("Recipe successfully created!");
            // Поки що закоментовано поки немає UserPage
            // navigate("/user-page");
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };



    const handleReset = () => {
        dispatch(resetSelectedCategory());
        dispatch(resetSelectedIngredient());

        reset();
        setImagePreview(null);
        setSelectedIngredients([]);
        setSelectedIngredient(null);
    };

    return (
        <form className={styles["add-recipe-form"]} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles["image-uploader-container"]}>
                <ImageUploader
                    control={control}
                    errors={errors}
                    setValue={setValue}
                    imagePreview={imagePreview}
                    setImagePreview={setImagePreview}
                />
            </div>
            <div className={styles["form-content"]}>
                <TitleInput
                    register={register}
                    errors={errors}
                />

                <DescriptionTextarea
                    name="description"
                    placeholder="Enter a description of the dish"
                    register={register}
                    errors={errors}
                    watch={watch}
                    setValue={setValue}
                />

                <div className={styles["form-row"]}>
                    <div className={styles["form-group"]}>
                        <CategoryDropdown
                            label="CATEGORY"
                            placeholder="Select a category"
                            ref={categoryDropdownRef}
                            onReset={() => {
                                dispatch(resetSelectedCategory());
                            }}
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <CookingTimeInput
                            watch={watch}
                            setValue={setValue}
                            errors={errors}
                        />
                    </div>
                </div>

                <IngredientsSection
                    control={control}
                    errors={errors}
                    ingredientsList={ingredientsList}
                    selectedIngredients={selectedIngredients}
                    setSelectedIngredients={setSelectedIngredients}
                    setValue={setValue}
                />

                <div className={styles["label-wrapper"]}>
                    <label className={styles["textarea-label"]}>RECIPE PREPARATION</label>
                </div>

                <DescriptionTextarea
                    name="instructions"
                    placeholder="Enter recipe"
                    register={register}
                    errors={errors}
                    watch={watch}
                    setValue={setValue}
                />

                <FormButtons
                    reset={handleReset}
                    setImagePreview={setImagePreview}
                    setSelectedIngredients={setSelectedIngredients}
                    setSelectedIngredient={setSelectedIngredient}
                />
            </div>
        </form>
    );
};

export default AddRecipeForm;