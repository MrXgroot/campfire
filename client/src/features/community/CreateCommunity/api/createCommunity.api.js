// api/createCommunity.js

import api from "../../../../api/api";

export const createCommunity = async (formData) => {
  const response = await api.post("/api/community", formData);

  return response.data;
};
