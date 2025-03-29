import React, { useEffect, useState, forwardRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../redux/categories/categorySlice';
import css from "./CategoryDropdown.module.css";
import { fetchCategories } from '../../redux/categories/operations';

const CategoryDropdown = forwardRef((
    { label = "Select a category", placeholder = "Choose category", onReset, register, setValue }, ref) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.list);
    const selectedCategory = useSelector((state) => state.categories.selectedCategory);
    const status = useSelector((state) => state.categories.status);
    const [isOpen, setIsOpen] = useState(false);

    const sortedCategories = useMemo(() => {
        return [...categories].sort((a, b) => a.name.localeCompare(b.name));
    }, [categories]);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories());
        }
    }, [status, dispatch]);

    const handleSelect = (categoryName) => {
        const selectedCat = categories.find(cat => cat.name === categoryName);
        dispatch(selectCategory(categoryName));
        setValue('category', { value: categoryName, id: selectedCat.id }, { shouldValidate: true });
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={css["custom-select-container"]}>
            <label className={css["dropdown-label"]}>{label}</label>

            <div
                ref={ref}
                className={css["custom-select"]}
                onClick={toggleDropdown}
            >
        <span className={css[selectedCategory ? 'selected-text' : 'placeholder-text']}>
          {selectedCategory || placeholder}
            <svg className={css["arrow-icon"]}>
            {isOpen
                ? (<use href='/img/icons.svg#icon-chevron-up-black'></use>)
                : (<use href='/img/icons.svg#icon-chevron-down-black'></use>)
            }
          </svg>
        </span>
            </div>

            {isOpen && (
                <ul className={css["custom-options"]}>
                    {status !== 'loading' && status !== 'failed' &&
                        sortedCategories.map((category) => (
                                <li key={category.id} onClick={() => handleSelect(category.name)}>
                                    {category.name}
                                </li>
                            )
                        )}

                    {status === 'loading' &&
                        <li className={css["loading-error-text"]}>
                            Loading categories...
                        </li>
                    }

                    {status === 'failed' &&
                        <li className={css["loading-error-text"]}>
                            Oops, something went wrong, please reload the page...
                        </li>
                    }
                </ul>
            )}

        </div>
    );
});

export default CategoryDropdown;