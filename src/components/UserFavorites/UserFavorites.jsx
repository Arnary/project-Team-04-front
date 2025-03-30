import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchUserFavoriteRecipes } from "../../redux/recipes/operations";
import RecipePreviewList from "../RecipePreviewList/RecipePreviewList";
import EmptyList from "../EmptyList/EmptyList";
import Pagination from "../Pagination/Pagination";

const UserFavorites = ({ isOwnProfile }) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.list);
  const currentPage = useSelector((state) => state.recipes.currentPage);
  const totalPages = useSelector((state) => state.recipes.totalPages);

  const changeCurrentPage = async (page) => {
    await loadUserRecipes(page);
  };

  const loadUserRecipes = async (page) => {
    dispatch(fetchUserFavoriteRecipes({ page }));
  };

  useEffect(() => {
    loadUserRecipes(1);
  }, []);

  return (
    <div>
      {recipes?.length > 0 ? (
        <>
          <RecipePreviewList
            items={recipes}
            isOwnProfile={isOwnProfile}
            listType="favorites"
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={changeCurrentPage}
          />
        </>
      ) : (
        <EmptyList>
          Nothing has been added to your favorite recipes list yet. Please
          browse our recipes and add your favorites for easy access in the
          future.
        </EmptyList>
      )}
    </div>
  );
};

export default UserFavorites;
