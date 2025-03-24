import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
    image: yup.mixed().required("Recipe image is required"),
    title: yup.string().required("Title is required"),
    description: yup.string().max(200, "Max 200 characters").required("Description is required"),
    category: yup.string().required("Category is required"),
    cookingTime: yup.number().min(5, "Min 5 min").required("Cooking time is required"),
    ingredients: yup.array().min(1, "At least one ingredient is required"),
    instructions: yup.string().max(200, "Max 200 characters").required("Instructions are required"),
});

const AddRecipeForm = () => {
    const {
        register,
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
            category: "",
            cookingTime: 5,
            ingredients: [],
            instructions: "",
        },
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [categories, setCategories] = useState([]);
    const [ingredientsList, setIngredientsList] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [selectedIngredientId, setSelectedIngredientId] = useState("");
    const [ingredientAmount, setIngredientAmount] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/api/categories")
            .then((res) => res.json())
            .then((data) => {
                const sortedCategories = data.sort((a, b) => a.name.localeCompare(b.name));
                setCategories(sortedCategories);
            })
            .catch((err) => console.error("Error fetching categories:", err));
    }, []);

    useEffect(() => {
        fetch("http://localhost:3001/api/ingredients")
            .then((res) => res.json())
            .then((data) => {
                const sortedIngredients = data.sort((a, b) => a.name.localeCompare(b.name));
                setIngredientsList(sortedIngredients);
            })
            .catch((err) => console.error("Error fetching ingredients:", err));
    }, []);


    const addIngredient = () => {
        if (!selectedIngredientId || !ingredientAmount.trim()) return;

        const selectedIngredient = ingredientsList.find(
            (ing) => ing.id === parseInt(selectedIngredientId)
        );

        if (
            selectedIngredient &&
            !selectedIngredients.find((ing) => ing.id === selectedIngredient.id)
        ) {
            const newIngredient = {
                ...selectedIngredient,
                amount: ingredientAmount,
            };
            const updatedIngredients = [...selectedIngredients, newIngredient];

            setSelectedIngredients(updatedIngredients);
            setValue("ingredients", updatedIngredients);
            setSelectedIngredientId("");
            setIngredientAmount("");
        }
    };

    const onSubmit = (data) => {
        console.log("Recipe submitted:", data);
        reset();
        setImagePreview(null);
        setSelectedIngredients([]);
    };

    // const onSubmit = async (data) => {
    //     const formData = new FormData();
    //     formData.append("image", data.image);
    //     formData.append("title", data.title);
    //     formData.append("description", data.description);
    //     formData.append("category", data.category);
    //     formData.append("cookingTime", data.cookingTime);
    //     formData.append("instructions", data.instructions);
    //     data.ingredients.forEach((ingredient, index) => {
    //         formData.append(`ingredients[${index}]`, JSON.stringify(ingredient));
    //     });
    //
    //     try {
    //         const response = await fetch("http://localhost:3001/api/recipes", {
    //             method: "POST",
    //             body: formData,
    //         });
    //
    //         if (!response.ok) {
    //             const errorData = await response.json();
    //             throw new Error(errorData.message || "Помилка під час створення рецепта");
    //         }
    //
    //         alert("Рецепт успішно створений!");
    //
    //         // Тимчасово закоментовано поки немає UserPage
    //         // navigate("/user-page");
    //     } catch (error) {
    //         alert(`Помилка: ${error.message}`);
    //     }
    // };


    return (
        <form className="add-recipe-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Recipe Image</label>
                <input
                    type="file"
                    accept="image/*"
                    {...register("image")}
                    onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                            setValue("image", file);
                            setImagePreview(URL.createObjectURL(file));
                        }
                    }}
                />
                {imagePreview && <img src={imagePreview} alt="Preview" />}
                {errors.image && <p>{errors.image.message}</p>}
            </div>

            <div>
                <label>Title</label>
                <input type="text" {...register("title")} />
                {errors.title && <p>{errors.title.message}</p>}
            </div>

            <div>
                <label>Description (max 200 characters)</label>
                <textarea
                    {...register("description")}
                    maxLength={200}
                    onChange={(e) => setValue("description", e.target.value.slice(0, 200))}
                />
                <span>{watch("description")?.length || 0}/200</span>
                {errors.description && <p>{errors.description.message}</p>}
            </div>

            <div>
                <label>Category</label>
                <select {...register("category")}>
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.name}>
                            {cat.name}
                        </option>
                    ))}
                </select>
                {errors.category && <p>{errors.category.message}</p>}
            </div>

            <div>
                <label>Cooking Time (min)</label>
                <div>
                    <button
                        type="button"
                        onClick={() =>
                            setValue("cookingTime", Math.max(5, watch("cookingTime") - 5))
                        }
                    >
                        -
                    </button>
                    <input type="number" {...register("cookingTime")} min="5" step="5" />
                    <button
                        type="button"
                        onClick={() => setValue("cookingTime", watch("cookingTime") + 5)}
                    >
                        +
                    </button>
                </div>
                {errors.cookingTime && <p>{errors.cookingTime.message}</p>}
            </div>

            <div>
                <label>Ingredients</label>
                <div style={{ display: "flex", gap: "10px" }}>
                    <select value={selectedIngredientId} onChange={(e) => setSelectedIngredientId(e.target.value)}>
                        <option value="">Select an ingredient</option>
                        {ingredientsList.map((ing) => (
                            <option key={ing.id} value={ing.id}>
                                {ing.name}
                            </option>
                        ))}
                    </select>

                    <input
                        type="text"
                        placeholder="Amount (e.g., 100 ml)"
                        value={ingredientAmount}
                        onChange={(e) => setIngredientAmount(e.target.value)}
                    />

                    <button type="button" onClick={addIngredient}>
                        Add ingredient +
                    </button>
                </div>

                <ul>
                    {selectedIngredients.map((ing, index) => (
                        <li key={index}>
                            <img src={ing.img} alt={ing.name} width="40" height="40" />
                            {ing.name} - {ing.amount}
                            <button
                                type="button"
                                onClick={() => {
                                    const updatedIngredients = selectedIngredients.filter(
                                        (_, i) => i !== index
                                    );
                                    setSelectedIngredients(updatedIngredients);
                                    setValue("ingredients", updatedIngredients);
                                }}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>

                {errors.ingredients && <p>{errors.ingredients.message}</p>}
            </div>

            <div>
                <label>Instructions (max 200 characters)</label>
                <textarea
                    {...register("instructions")}
                    maxLength={200}
                    onChange={(e) => setValue("instructions", e.target.value.slice(0, 200))}
                />
                <span>{watch("instructions")?.length || 0}/200</span>
                {errors.instructions && <p>{errors.instructions.message}</p>}
            </div>

            <button type="reset" onClick={() => reset()}>
                Clear
            </button>
            <button type="submit">Publish</button>
        </form>
    );
};

export default AddRecipeForm;
