import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipesByCategory, fetchRecipesByFilters } from "./operations";

const recipeSlice = createSlice({
	name: "recipes",
	initialState: {
		list: [],
		selectedRecipe: "",
		status: "idle",
		error: null,
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
});

export const { selectRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
