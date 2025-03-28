import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainTitle from "../MainTitle/MainTitle.jsx";
import Subtitle from "../Subtitle/Subtitle.jsx";
import CategoryList from "../CategoryList/CategoryList";
import css from "./Categories.module.css";
import style from '../App.module.css';
import { fetchCategories } from "../../redux/categories/operations.js";

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <section className={css["category-section"]}>
      <div className={style.container}>
      <MainTitle>Categories</MainTitle>
      <Subtitle>
        Discover a limitless world of culinary possibilities and enjoy exquisite
        recipes that combine taste, style and the warm atmosphere of the
        kitchen.
      </Subtitle>
        <CategoryList/>
      </div>
    </section>
  );
};

export default Categories;
