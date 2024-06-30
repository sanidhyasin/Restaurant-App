import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${url}/api/v1/auth`;

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

export const register = async (username, password, role) => {
  console.log("Sending registration data:", { username, password, role });
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      password,
      role,
    });
    console.log("Registration response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Registration error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
