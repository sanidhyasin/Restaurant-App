import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;
console.log(url);
const API_URL = `${url}/api/v1/orders`;

export const createOrder = async (token, order) => {
  const response = await axios.post(API_URL, order, {
    headers: { Authorization: token },
  });
  return response.data;
};

export const getCurrentOrder = async (token) => {
  const response = await axios.get(`${API_URL}/current`, {
    headers: { Authorization: token },
  });
  return response.data;
};

export const getOrderHistory = async (token) => {
  const response = await axios.get(`${API_URL}/history`, {
    headers: { Authorization: token },
  });
  return response.data;
};

export const getIncomingOrders = async (token) => {
  const response = await axios.get(`${API_URL}/incoming`, {
    headers: { Authorization: token },
  });
  return response.data;
};

export const completeOrder = async (token, orderId) => {
  const response = await axios.put(`${API_URL}/${orderId}/complete`, null, {
    headers: { Authorization: token },
  });
  return response.data;
};
