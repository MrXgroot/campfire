import axios from "axios";

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
    // Example:
    // const token = localStorage.getItem("accessToken");
    //
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//==============================
// Response Interceptor
//==============================

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response } = error;

    switch (response?.status) {
      case 401:
        // TODO:
        // Refresh token
        // Logout user
        // Redirect to login
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
