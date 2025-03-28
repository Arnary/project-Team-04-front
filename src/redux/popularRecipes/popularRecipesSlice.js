import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularRecipes, fetchRecipesByCategory, fetchRecipesByFilters } from "./operations";

const popularRecipesSlice = createSlice({
	name: "popular",
	initialState: {
		list: [],
		error: null,
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchPopularRecipes.pending, (state) => {
    		    state.error = null;
    		})
    		.addCase(fetchPopularRecipes.fulfilled, (state, action) => {
    		    state.list = action.payload;
    		})
    		.addCase(fetchPopularRecipes.rejected, (state, action) => {
    		    state.error = action.error.message;
    		})
});

export default popularRecipesSlice.reducer;
