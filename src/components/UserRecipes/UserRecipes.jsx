import RecipePreviewList from "../RecipePreviewList/RecipePreviewList";
import EmptyList from "../EmptyList/EmptyList";
import { useEffect, useState } from "react";
import { fetchUserRecipes } from "../../api/foodies";
import { toast } from "react-hot-toast";
import Pagination from "../Pagination/Pagination";

const UserRecipes = ({ userId }) => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const changeCurrentPage = async (page) => {
    await loadUserRecipes(page);
  };

  const loadUserRecipes = async (page) => {
    try {
      const response = await fetchUserRecipes(userId, page);
      setRecipes(response.recipes);
      setCurrentPage(response.currentPage);
      setTotalPages(response.totalPages);
    } catch (error) {
      toast.error("Failed to load recipes!");
    }
  };

  useEffect(() => {
    loadUserRecipes(currentPage);
  }, [userId]);

  return (
    <div>
      {recipes.length > 0 ? (
        <>
          <RecipePreviewList items={recipes} />
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
