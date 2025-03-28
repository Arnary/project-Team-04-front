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
