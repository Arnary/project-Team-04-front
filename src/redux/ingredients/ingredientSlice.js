import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchIngredients = createAsyncThunk(
    "ingredients/fetchIngredients",
    async (ThunkAPI) => {
        try {
            const response = await axios.get(`${BASE_URL}/ingredients`);
            return response.data;
        } catch (error) {
            return ThunkAPI.rejectWithValue(error.message);
        }
    },
);

const ingredientSlice = createSlice({
    name: "ingredients",
    initialState: {
        list: [],
        selectedIngredient: null,
        status: "idle",
        error: null,
    },
    reducers: {
        selectIngredient: (state, action) => {
            state.selectedIngredient = state.list.find(
                ingredient => ingredient.name === action.payload
            ) || null;
        },
        resetSelectedIngredient: (state) => {
            state.selectedIngredient = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchIngredients.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchIngredients.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.list = action.payload;
            })
            .addCase(fetchIngredients.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { selectIngredient, resetSelectedIngredient } = ingredientSlice.actions;
export default ingredientSlice.reducer;