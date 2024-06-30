import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/menu";

export const getMenuItems = async (token) => {
  const response = await axios.get(`${API_URL}/items`, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

export const getCategories = async (token) => {
  const response = await axios.get(`${API_URL}/categories`, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};
