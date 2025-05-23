import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchCurrentProfile = createAsyncThunk(
  "profile/fetchCurrentProfile",
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) throw new Error("No token available");

    try {
      const response = await axios.get(`${BASE_URL}/users/current`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      toast.error("Failed to load current profile!");
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (id, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) throw new Error("No token available");

    try {
      const response = await axios.get(`${BASE_URL}/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to load profile!");
      return rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  "profile/updateAvatar",
  async (formData, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) throw new Error("No token available");

    try {
      const response = await axios.patch(`${BASE_URL}/auth/avatars`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      toast.error("Failed to update avatar!");
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserFollowing = createAsyncThunk(
  "profile/fetchUserFollowing",
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) throw new Error("No token available");

    try {
      const response = await axios.get(`${BASE_URL}/users/following`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      toast.error("Failed to load following!");
      return rejectWithValue(error.message);
    }
  }
);

export const followProfile = createAsyncThunk(
  "profile/followProfile",
  async (id, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) throw new Error("No token available");

    try {
      await axios.post(
        `${BASE_URL}/users/follow`,
        { userId: +id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return { id: +id };
    } catch (error) {
      toast.error("Failed to follow user!");
      return rejectWithValue(error.message);
    }
  }
);

export const unfollowProfile = createAsyncThunk(
  "profile/unfollowProfile",
  async (id, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) throw new Error("No token available");

    try {
      await axios.post(
        `${BASE_URL}/users/unfollow`,
        { userId: +id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return { id: +id };
    } catch (error) {
      toast.error("Failed to unfollow user!");
      return rejectWithValue(error.message);
    }
  }
);
