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
	recipes: {
		total: 0,
		result: [],
	},
	isLoadingFavorite: false,
	isErrorFavorite: null,
	isLoading: false,
	isError: null,
	popularRecipes: [],
	isLoadingPopular: false,
	isErrorPopular: null,
	recipeCreate: {
		lastCreatedRecipe: null,
		isLoading: false,
		isError: null,
	},
	recipeDelete: {
		isLoading: false,
		isError: null,
	},
	fetchRecipes: {
		isLoading: false,
		isError: null,
		result: {
			total: 0,
			recipes: [],
		},
	},
};

const favoritesSlice = createSlice({
	name: "favorite_recipes",
	initialState,
	reducers: {
		selectRecipe: (state, action) => {
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

export const { selectRecipe } = favoritesSlice.actions;
export default favoritesSlice.reducer;
