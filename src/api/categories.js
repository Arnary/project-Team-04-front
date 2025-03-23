import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchCategories = async () => {
    const { data } = await axios.get(`${BASE_URL}/categories`);
    return data;
};
