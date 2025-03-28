import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentProfile, fetchProfile } from "./operations";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    currentProfile: null,
    selectedProfile: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCurrentProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentProfile = action.payload;
      })
      .addCase(fetchCurrentProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedProfile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;
