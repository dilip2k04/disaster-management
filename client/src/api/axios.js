import axios from "axios";

const api = axios.create({
  baseURL: "https://disaster-management-7e5w.onrender.com/api",
  withCredentials: false   // ⭐⭐⭐ VERY IMPORTANT
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

export default api;
