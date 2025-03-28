import axios from "axios";
import { toast } from "react-hot-toast";

import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchPopularRecipes = createAsyncThunk(
  "recipes/fetchPopularRecipes",
  async (ThunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/recipes/popular`);
      return response.data;
	} catch (error) {
		toast.error("Failed to load popular recipes!");
      	return ThunkAPI.rejectWithValue(error.message);
    }
  }
);