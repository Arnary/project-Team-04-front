import React, { useEffect, useState, forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../redux/categories/categorySlice';
import css from "./CategoryDropdown.module.css";
import { fetchCategories } from '../../redux/categories/operations';

const CategoryDropdown = forwardRef(({ label = "Select a category", placeholder = "Choose category", onReset }, ref) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.list);
    const selectedCategory = useSelector((state) => state.categories.selectedCategory);
    const status = useSelector((state) => state.categories.status);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories());
        }
    }, [status, dispatch]);

    const handleSelect = (categoryId) => {
        const selectedCat = categories.find(cat => cat.id === categoryId);

        if (selectedCat) {
            dispatch(selectCategory(categoryId));
            setIsOpen(false);
        }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectedCategoryName = selectedCategory
        ? categories.find(cat => cat.id === selectedCategory)?.name
        : placeholder;

    return (
        <div className={css["custom-select-container"]}>
            {/* Динамічний заголовок */}
            <label className={css["dropdown-label"]}>{label}</label>

            <div
                ref={ref}
                className={css["custom-select"]}
                onClick={toggleDropdown}
            >
        <span className={css[selectedCategory ? 'selected-text' : 'placeholder-text']}>
          {selectedCategoryName}
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
                        categories.map((category) => (
                                <li key={category.id} onClick={() => handleSelect(category.id)}>
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

            {/* Кнопка для скидання вибору */}
            {selectedCategory && (
                <button className={css["reset-button"]} onClick={onReset}>
                    Reset
                </button>
            )}
        </div>
    );
});

export default CategoryDropdown;
