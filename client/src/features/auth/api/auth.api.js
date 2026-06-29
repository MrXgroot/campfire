import api from "../../../api/api";

/**
 * Register User
 */
export const register = async (userData) => {
  const response = await api.post("api/auth/register", userData);

  return response.data;
};

/**
 * Login User
 */
export const login = async (credentials) => {
  const response = await api.post("api/auth/login", credentials);

  return response.data;
};

/**
 * Logout User
 */
export const logout = async () => {
  const response = await api.post("/auth/logout");

  return response.data;
};

/**
 * Get Current Authenticated User
 */
export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");

  return response.data;
};
