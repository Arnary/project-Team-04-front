import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './operations';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    selectedCategory: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    resetSelectedCategory: (state) => {
      state.selectedCategory = '';
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchCategories.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.list = action.payload;
        })
        .addCase(fetchCategories.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
  },
});

export const { selectCategory, resetSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;