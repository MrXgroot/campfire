import axios from "axios";
import {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
} from "../shared/lib/token";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

//==============================
// Request Interceptor
//==============================

api.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

//==============================
// Response Interceptor
//==============================

api.interceptors.response.use(
  (response) => {
    const accessToken = response.data?.data?.accessToken;
    if (accessToken) setAccessToken(accessToken);

    return response;
  },
  (error) => {
    const { response } = error;

    switch (response?.status) {
      case 401:
        removeAccessToken();

        window.location.href = "/login";
        break;

      case 403:
        console.error("Forbidden");
        break;

      case 404:
        console.error("Resource not found");
        break;

      case 500:
        console.error("Internal server error");
        break;

      default:
        break;
    }

    return Promise.reject(error);
  },
);

export default api;
