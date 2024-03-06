import axios from "axios";

const API_URL = "http://127.0.0.1:8080/api/auth/";

export const register = async (name: {}, lastName: {}, birthday: {}, address: {}, zipCode: {},
                               city: {}, email: {}, password: {},) => {

  try {
    const response = await axios.post(API_URL + "register",
        {
          name,
          lastName,
          birthday,
          address,
          zipCode,
          city,
          email,
          password,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const login = (email: {}, password: {}) => {
  return axios
    .post(API_URL + "login", {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
};

const currentUser = (getCurrentUser()) ? (getCurrentUser().accessToken) : null;

export const headersConfig = {
  headers: { 
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Authorization': `Bearer ${currentUser}` 
  }
};