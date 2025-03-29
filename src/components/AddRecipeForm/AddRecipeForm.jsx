import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./AddRecipeForm.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { resetSelectedCategory } from '../../redux/categories/categorySlice';
import { useNavigate } from 'react-router-dom';

import ImageUploader from '../ImageUploader/ImageUploader';
import CookingTimeInput from '../CookingTimeInput/CookingTimeInput';
import IngredientsSection from '../IngredientsSection/IngredientsSection';
import FormButtons from '../FormButtons/FormButtons';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';
import TitleInput from '../TitleInput/TitleInput';
import DescriptionTextarea from '../DescriptionTextarea/DescriptionTextarea';
import { resetSelectedIngredient } from "../../redux/ingredients/ingredientSlice";

const schema = yup.object().shape({
    image: yup.mixed().required("Recipe image is required"),
    title: yup.string().required("Title is required"),
    description: yup.string().max(200, "Max 200 characters").required("Description is required"),
    category: yup.object().shape({
        value: yup.string().required("Category is required"),
        id: yup.number().required("Category ID is required")
    }).nullable(),
    cookingTime: yup.number().min(5).max(160).required("Cooking time is required"),
    ingredients: yup.array().min(1, "At least one ingredient is required"),
    instructions: yup.string().max(200, "Max 200 characters").required("Instructions are required"),
});

const AddRecipeForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const categoryDropdownRef = useRef(null);
    const categories = useSelector((state) => state.categories.list);
    const categoriesStatus = useSelector((state) => state.categories.status);

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
    const [ingredientsList, setIngredientsList] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [selectedIngredient, setSelectedIngredient] = useState(null);

    const onSubmit = async (data) => {
        if (categoriesStatus === 'loading') {
            alert("Categories are still loading, please wait");
            return;
        }

        console.log("Submitting form data:", data);

        if (!data.category || !data.category.id) {
            alert("Please select a valid category");
            return;
        }

        if (!data.image || data.image.length === 0) {
            alert("Please upload a recipe image");
            return;
        }

        const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
        if (!allowedTypes.includes(data.image[0].type)) {
            alert("Please upload a valid image file (JPEG, PNG or GIF)");
            return;
        }

        const persistedAuth = localStorage.getItem("persist:auth");
        if (!persistedAuth) {
            alert("Error: No authentication token found in storage");
            return;
        }

        const parsedAuth = JSON.parse(persistedAuth);
        const token = JSON.parse(parsedAuth.token);

        if (!token) {
            alert("Error: Token is missing");
            return;
        }

        const formData = new FormData();
        formData.append("thumb", data.image[0]);
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("instructions", data.instructions);
        formData.append("time", data.cookingTime);
        formData.append("categoryId", data.category.id);
        formData.append("areaId", 2);

        const formattedIngredients = selectedIngredients.map(ingredient => ({
            id: ingredient.id,
            measure: ingredient.measure,
        }));
        formData.append("ingredients", JSON.stringify(formattedIngredients));

        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Error creating recipe");
            }

            handleReset();
            navigate('/profile');
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    const handleReset = () => {
        dispatch(resetSelectedCategory());
        dispatch(resetSelectedIngredient());

        reset();
        setValue("category", null);
        setValue("cookingTime", 10);
        setValue("instructions", "");

        setImagePreview(null);
        setSelectedIngredients([]);
        setSelectedIngredient(null);
    };

    useEffect(() => {
        const file = watch("image")?.[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    }, [watch("image")]);

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
                                setValue('category', null);
                            }}
                            register={register}
                            setValue={setValue}
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