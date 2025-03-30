import { createSlice } from "@reduxjs/toolkit";
import {
  fetchRecipesByCategory,
  fetchRecipesByFilters,
  fetchUserRecipes,
  deleteRecipe,
  fetchUserFavoriteRecipes,
  deleteFavoriteRecipe,
} from "./operations";

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    list: [],
    selectedRecipe: "",
    status: "idle",
    error: null,
    currentPage: 1,
    totalPages: 1,
  },
  reducers: {
    selectRecipe: (state, action) => {
      state.selectedRecipe = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchRecipesByCategory.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(fetchRecipesByCategory.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchRecipesByFilters.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchRecipesByFilters.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(fetchRecipesByFilters.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchUserRecipes.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchUserRecipes.fulfilled, (state, action) => {
        state.list = action.payload.recipes;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.status = "succeeded";
      })
      .addCase(fetchUserRecipes.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteRecipe.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (recipe) => recipe.id !== action.payload
        );
      })
      .addCase(deleteRecipe.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchUserFavoriteRecipes.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchUserFavoriteRecipes.fulfilled, (state, action) => {
        state.list = action.payload.recipes;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.status = "succeeded";
      })
      .addCase(fetchUserFavoriteRecipes.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteFavoriteRecipe.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteFavoriteRecipe.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (recipe) => recipe.id !== action.payload
        );
      })
      .addCase(deleteFavoriteRecipe.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const { selectRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
