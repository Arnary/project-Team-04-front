import axios from "axios";
import { toast } from "react-hot-toast";

import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getFavoriteRecipes = createAsyncThunk(
  "recipes/getFavoriteRecipes",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token;

      if (!token) {
        return rejectWithValue("User is not authenticated");
      }

      const response = await axios.get(
        "https://project-team-04.onrender.com/api/users/favorites",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      toast.error("Failed to load recipes!");
      return rejectWithValue(error.message);
    }
  }
);

export const addFavoriteRecipe = createAsyncThunk(
  "recipes/addFavoriteRecipe",
  async (id, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token;

      if (!token) {
        return rejectWithValue("User is not authenticated");
      }

      const response = await axios.post(
        `https://project-team-04.onrender.com/api/recipes/favorites/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      toast.error("Failed to load favorite recipe!");
      return rejectWithValue(error.message);
    }
  }
);

export const removeFromFavoriteRecipe = createAsyncThunk(
  "recipes/removeFromFavoriteRecipe",
  async (id, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token;

      if (!token) {
        return rejectWithValue("User is not authenticated");
      }

      const response = await axios.delete(
        `https://project-team-04.onrender.com/api/recipes/favorites/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      toast.error("Failed to delete favorite recipe!");
      return rejectWithValue(error.message);
    }
  }
);

export const fetchRecipesByCategory = createAsyncThunk(
  "recipes/fetchByCategory",
  async ({ category, page, size }, ThunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/recipes`, {
        params: {
          category: category || undefined,
          page: page,
          limit: size || 12,
        },
      });
      return response.data;
    } catch (error) {
      toast.error("Failed to load recipes!");
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRecipesByFilters = createAsyncThunk(
  "recipes/fetchRecipesByFilters",
  async ({ area, ingredient, category, page, size }, ThunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/recipes`, {
        params: {
          area: area || undefined,
          ingredient: ingredient ? ingredient.name : undefined,
          category: category || undefined,
          page: page,
          limit: size || 12,
        },
      });
      return response.data;
    } catch (error) {
      toast.error("Failed to load recipes!");
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserRecipes = createAsyncThunk(
  "recipes/fetchUserRecipes",
  async ({ userId, page }, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.token;

      if (!token) {
        return rejectWithValue("User is not authenticated");
      }

      const response = await axios.get(`${BASE_URL}/users/${userId}/recipes`, {
        params: {
          page: page,
          limit: 9,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to load recipes!");
      return rejectWithValue(error.message);
    }
  }
);

export const deleteRecipe = createAsyncThunk(
  "recipes/deleteRecipe",
  async (id, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.token;

      if (!token) {
        return rejectWithValue("User is not authenticated");
      }

      await axios.delete(`${BASE_URL}/recipes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return id;
    } catch (error) {
      toast.error("Failed to delete recipe!");
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserFavoriteRecipes = createAsyncThunk(
  "recipes/fetchUserFavoriteRecipes",
  async ({ page }, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.token;

      if (!token) {
        return rejectWithValue("User is not authenticated");
      }

      const response = await axios.get(`${BASE_URL}/users/favorites`, {
        params: {
          page: page,
          limit: 9,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to load recipes!");
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFavoriteRecipe = createAsyncThunk(
  "recipes/deleteFavoriteRecipe",
  async (id, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.token;

      if (!token) {
        return rejectWithValue("User is not authenticated");
      }

      await axios.delete(`${BASE_URL}/recipes/favorites/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return id;
    } catch (error) {
      toast.error("Failed to delete recipe!");
      return rejectWithValue(error.message);
    }
  }
);
