import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/auth';

export const loginApi = async (credentials: Record<string, string>) => {
  const response = await axios.post(`${API_BASE_URL}/login`, credentials);
  return response.data;
};

export const registerApi = async (userData: Record<string, string>) => {
  const response = await axios.post(`${API_BASE_URL}/register`, userData);
  return response.data;
};