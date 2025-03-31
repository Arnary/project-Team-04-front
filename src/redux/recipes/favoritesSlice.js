import { createSlice } from "@reduxjs/toolkit";
import {
	addFavoriteRecipe,
	removeFromFavoriteRecipe,
	getFavoriteRecipes,
} from "./operations";

const initialState = {
	selectedRecipe: "",
	favoriteRecipes: [],
	myFavorites: {
		total: 0,
		favoriteRecipes: [],
	},
	isLoadingFavorite: false,
	isErrorFavorite: null,
	isLoading: false,
	isError: null,
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		selectFavoriteRecipe: (state, action) => {
			state.selectedRecipe = action.payload;
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(getFavoriteRecipes.pending, (state, action) => {
				state.isLoading = true;
				state.isError = null;
			})
			.addCase(getFavoriteRecipes.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = action.payload;
			})
			.addCase(getFavoriteRecipes.fulfilled, (state, action) => {
				state.isLoading = false;
				state.favoriteRecipes = action.payload;
			})
			.addCase(addFavoriteRecipe.pending, (state, action) => {
				state.isLoadingFavorite = true;
				state.isErrorFavorite = null;
			})
			.addCase(addFavoriteRecipe.rejected, (state, action) => {
				state.isLoadingFavorite = false;
				state.isErrorFavorite = action.payload;
			})
			.addCase(addFavoriteRecipe.fulfilled, (state, action) => {
				state.isLoadingFavorite = false;
				state.isErrorFavorite = null;
			})
			.addCase(removeFromFavoriteRecipe.pending, (state, action) => {
				state.isLoadingFavorite = true;
				state.isErrorFavorite = null;
			})
			.addCase(removeFromFavoriteRecipe.rejected, (state, action) => {
				state.isLoadingFavorite = false;
				state.isErrorFavorite = action.payload;
			})
			.addCase(removeFromFavoriteRecipe.fulfilled, (state, action) => {
				state.isLoadingFavorite = false;
				state.isErrorFavorite = null;
			}),
});

export const { selectFavoriteRecipe } = favoritesSlice.actions;
export default favoritesSlice.reducer;
