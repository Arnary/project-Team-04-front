import axios from "axios";
import { selectToken } from "../redux/auth/authSlice";
import { store } from "../redux/store";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const createConfig = () => {
  const token = selectToken(store.getState());
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const fetchUserFollowers = async (userId, page = 1, limit = 5) => {
  const params = new URLSearchParams({
    page,
    limit,
  });
  const {
    data: { currentPage, followers, totalPages, authUserFollowingIds },
  } = await axios.get(
    `${BASE_URL}/users/${userId}/followers?${params}`,
    createConfig()
  );
  return { currentPage, followers, totalPages, authUserFollowingIds };
};

export const fetchAuthUserFollowing = async (page = 1, limit = 5) => {
  const params = new URLSearchParams({
    page,
    limit,
  });
  const {
    data: { currentPage, following, totalPages },
  } = await axios.get(`${BASE_URL}/users/following?${params}`, createConfig());
  return { currentPage, following, totalPages };
};

export const unfollow = async (userId) => {
  await axios.post(`${BASE_URL}/users/unfollow`, { userId }, createConfig());
};

export const follow = async (userId) => {
  await axios.post(`${BASE_URL}/users/follow`, { userId }, createConfig());
};
