import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserRecipes } from "../../redux/recipes/operations";
import RecipePreviewList from "../RecipePreviewList/RecipePreviewList";
import EmptyList from "../EmptyList/EmptyList";
import Pagination from "../Pagination/Pagination";

const UserRecipes = ({ userId, isOwnProfile }) => {
  const recipes = useSelector((state) => state.recipes.list);
  const currentPage = useSelector((state) => state.recipes.currentPage);
  const totalPages = useSelector((state) => state.recipes.totalPages);

  const dispatch = useDispatch();

  const changeCurrentPage = async (page) => {
    await loadUserRecipes(page);
  };

  const loadUserRecipes = async (page) => {
    dispatch(fetchUserRecipes({ userId, page }));
  };

  useEffect(() => {
    loadUserRecipes(currentPage);
  }, [userId]);

  return (
    <div>
      {recipes?.length > 0 ? (
        <>
          <RecipePreviewList
            items={recipes}
            isOwnProfile={isOwnProfile}
            listType="recipes"
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={changeCurrentPage}
          />
        </>
      ) : (
        <EmptyList>
          Nothing has been added to your recipes list yet. Please browse our
          recipes and add your favorites for easy access in the future.
        </EmptyList>
      )}
    </div>
  );
};

export default UserRecipes;
