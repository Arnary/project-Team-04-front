import clsx from "clsx";
import CategoryCard from "../CategoryCard/CategoryCard";
import css from "./CategoryList.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AllCategories from "../AllCategories/AllCategories";

const DEFAULT_VIEW_ITEMS_NUMBER = 8;

const CategoryList = () => {
  const categories = useSelector((state) => state.categories.list);
  const [firstViewItemsNumber, setFirstViewItemsNumber] = useState(
    DEFAULT_VIEW_ITEMS_NUMBER,
  );
  const [showAll, setShowAll] = useState(false);

  const provideTabletClass = (index) => {
    return index % 5 === 2 ? "tw2" : "tw1";
  };

  const provideDesktopClass = (index) => {
    return [2, 3].includes(index % 6) ? "dw2" : "dw1";
  };

  const createItemClass = (index) => {
    return clsx(
      css.categoriesListItem,
      css[provideTabletClass(index)],
      css[provideDesktopClass(index)],
    );
  };

  useEffect(() => {
    const recalculateFirstViewItems = () => {
      const number = window.innerWidth > 767 ? 11 : 8;
      setFirstViewItemsNumber(number);
    };

    recalculateFirstViewItems();

    window.addEventListener("resize", recalculateFirstViewItems);

    return () =>
      window.removeEventListener("resize", recalculateFirstViewItems);
  }, []);

  return (
    <ul className={css.categoriesList}>
      {categories
        .slice(0, showAll ? categories.length : firstViewItemsNumber)
        .map((category, index) => (
          <li className={createItemClass(index)} key={index}>
            <CategoryCard title={category.name} />
          </li>
        ))}
      {!showAll && (
        <li
          className={createItemClass(firstViewItemsNumber)}
          onClick={() => setShowAll(true)}
        >
          <AllCategories />
        </li>
      )}
    </ul>
  );
};

export default CategoryList;
