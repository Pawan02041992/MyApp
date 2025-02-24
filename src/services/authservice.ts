import axios from 'axios';

const AuthServiceUrl = 'https://localhost:7273'; // Replace with your backend URL

export const login = async (mobile: string, password: string) => {
  try {
    const response = await axios.post(`${AuthServiceUrl}/api/login`, {
      mobile,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (mobile: string, password: string, role: 'admin' | 'user') => {
  try {
    const response = await axios.post(`${AuthServiceUrl}/api/register`, {
      mobile,
      password,
      role,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};