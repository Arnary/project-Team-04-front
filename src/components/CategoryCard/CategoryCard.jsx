import clsx from "clsx";
import css from "./CategoryCard.module.css";
import ArrowUpRightIcon from "../../icons/ArrowUpRightIcon";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectCategory } from "../../redux/categories/categorySlice";

const CategoryCard = ({ title }) => {
  const className = clsx(css.categoryCard, css[title.toLowerCase()]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectCategory(title));
    navigate("/recipes");
  };

  return (
    <div className={className}>
      <div className={css.cardContent}>
        <h3 className={css.cardTitle}>{title}</h3>
          <button onClick={handleClick} className={css.iconWrapper}>
            <ArrowUpRightIcon />
          </button>
      </div>
    </div>
  );
};

export default CategoryCard;
