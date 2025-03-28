import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './operations';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    selectedCategory: null,
    status: "idle",
    error: null,
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    resetSelectedCategory: (state) => {
      state.selectedCategory = null;
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchCategories.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.list = action.payload;
        })
        .addCase(fetchCategories.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
  },
});

export const { selectCategory, resetSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;