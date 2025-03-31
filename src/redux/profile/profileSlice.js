import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCurrentProfile,
  fetchProfile,
  updateAvatar,
  fetchUserFollowing,
  followProfile,
  unfollowProfile,
} from "./operations";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    currentProfile: null,
    selectedProfile: null,
    status: "idle",
    error: null,
    following: [],
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
      })
      .addCase(updateAvatar.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (state.currentProfile) {
          state.currentProfile.avatar = action.payload.avatar;
        }
        if (state.selectedProfile) {
          state.selectedProfile.avatar = action.payload.avatar;
        }
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUserFollowing.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserFollowing.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.following = action.payload.following;
      })
      .addCase(fetchUserFollowing.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(followProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(followProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        const newFollowing = action.payload;
        state.following.push(newFollowing);
      })
      .addCase(followProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(unfollowProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(unfollowProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        const unfollowedId = action.payload.id;
        state.following = state.following.filter(
          (profile) => profile.id !== unfollowedId
        );
      })
      .addCase(unfollowProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const isFollowingProfile = (profileId) => (state) =>
  state.profile.following.some((profile) => profile.id === +profileId);

export default profileSlice.reducer;
