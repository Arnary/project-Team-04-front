import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchAreas = createAsyncThunk(
  "areas/fetchAreas",
  async (ThunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/areas`);
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);

const areaSlice = createSlice({
  name: "areas",
  initialState: {
    list: [],
    selectedArea: "",
    status: "idle",
    error: null,
  },
  reducers: {
    selectArea: (state, action) => {
      state.selectedArea = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAreas.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAreas.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchAreas.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { selectArea } = areaSlice.actions;
export default areaSlice.reducer;
