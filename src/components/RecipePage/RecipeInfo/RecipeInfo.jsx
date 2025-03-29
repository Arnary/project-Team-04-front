import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RecipeMainInfo from "../RecipeMainInfo/RecipeMainInfo";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import RecipePreparation from "../RecipePreparation/RecipePreparation";
import PathInfo from "../PathInfo/PathInfo";
import SignInModal from "../../SignInModal/SignInModal";
import styles from "./RecipeInfo.module.css";
import placeholderAvatar from "../../../img/empty/no-avatar.jpg";

const RecipeInfo = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes/${id}`);
        const json = await res.json();
        setRecipe(json.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleAuthorClick = () => {
    if (!isLoggedIn) {
      setShowSignIn(true);
    } else {
      navigate(`/user/${recipe.owner?._id}`);
    }
  };

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className={styles.breadcrumbs}>
        <PathInfo title={recipe.title} />
      </section>

      <section className={styles.section}>
        <img className={styles.image} src={recipe.thumb} alt={recipe.title} />

        <div className={styles.content}>
          <RecipeMainInfo
            title={recipe.title}
            category={recipe.category || "Unknown"}
            time={recipe.time ? `${recipe.time} min` : "N/A"}
            description={recipe.description}
            author={{
              name: recipe.owner?.name || "Unknown",
              avatar: recipe.owner?.avatar || placeholderAvatar,
              onClick: handleAuthorClick
            }}
          />

          <div className={styles.recipeLayout}>
            <RecipeIngredients
              ingredients={recipe.ingredients?.map(ing => ({
                id: ing.id,
                name: ing.name,
                quantity: ing.measure,
                image: ing.img,
              })) || []}
            />
            <RecipePreparation
              instructions={recipe.instructions}
              isFavorite={false}
            />
          </div>
        </div>
      </section>

      {showSignIn && (
        <SignInModal
          isOpen={showSignIn}
          onClose={() => setShowSignIn(false)}
        />
      )}
    </>
  );
};

export default RecipeInfo;
