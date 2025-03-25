import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./AddRecipeForm.module.css";
import { useDispatch } from 'react-redux';
import { selectCategory, resetSelectedCategory } from '../../redux/categories/categorySlice';

// Компоненти
import ImageUploader from '../ImageUploader/ImageUploader';
import CookingTimeInput from '../CookingTimeInput/CookingTimeInput';
import IngredientsSection from '../IngredientsSection/IngredientsSection';
import FormButtons from '../FormButtons/FormButtons';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown'
import TitleInput from '../TitleInput/TitleInput';
import DescriptionTextarea from '../DescriptionTextarea/DescriptionTextarea';

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

    useEffect(() => {
        fetch("http://localhost:3001/api/categories")
            .then((res) => res.json())
            .then((data) => {
                const sortedCategories = data
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((cat) => ({ value: cat.id, label: cat.name }));

                setCategories(sortedCategories);
            })
            .catch((err) => console.error("Error fetching categories:", err));
    }, []);

    useEffect(() => {
        fetch("http://localhost:3001/api/ingredients")
            .then((res) => res.json())
            .then((data) => {
                const sortedIngredients = data
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((ing) => ({
                        value: ing.id,
                        label: ing.name,
                        img: ing.img
                    }));

                setIngredientsList(sortedIngredients);
            })
            .catch((err) => console.error("Error fetching ingredients:", err));
    }, []);

    const onSubmit = (data) => {
        console.log("Recipe submitted:", data);
        reset();
        setImagePreview(null);
        setSelectedIngredients([]);
    };

    const handleReset = () => {
        dispatch(resetSelectedCategory());

        reset();
        setImagePreview(null);
        setSelectedIngredients([]);
        setSelectedIngredient(null);
    };

    return (
        <form className={styles["add-recipe-form"]} onSubmit={handleSubmit(onSubmit)}>
            <ImageUploader
                control={control}
                errors={errors}
                setValue={setValue}
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
            />

            <TitleInput
                register={register}
                errors={errors}
            />

            <DescriptionTextarea
                register={register}
                errors={errors}
                watch={watch}
                setValue={setValue}
            />

            <CategoryDropdown
                label="CATEGORY"
                placeholder="Select a category"
                ref={categoryDropdownRef}
                onReset={() => {
                    dispatch(resetSelectedCategory());
                }}
            />

            <CookingTimeInput
                watch={watch}
                setValue={setValue}
                errors={errors}
            />

            <IngredientsSection
                control={control}
                errors={errors}
                ingredientsList={ingredientsList}
                selectedIngredients={selectedIngredients}
                setSelectedIngredients={setSelectedIngredients}
                setValue={setValue}
            />

            <FormButtons
                reset={handleReset}
                setImagePreview={setImagePreview}
                setSelectedIngredients={setSelectedIngredients}
                setSelectedIngredient={setSelectedIngredient}
            />
        </form>
    );
};

export default AddRecipeForm;