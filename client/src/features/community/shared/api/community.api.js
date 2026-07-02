import api from "../../../shared/api/axios";

/**
 * Create Community
 */
export const createCommunity = async (communityData) => {
  const response = await api.post("/communities", communityData);

  return response.data;
};

/**
 * Get All Communities
 */
export const getCommunities = async (params = {}) => {
  const response = await api.get("/communities", {
    params,
  });

  return response.data;
};

/**
 * Get Community By Slug
 */
export const getCommunityBySlug = async (slug) => {
  const response = await api.get(`/communities/${slug}`);

  return response.data;
};

/**
 * Update Community
 */
export const updateCommunity = async (communityId, updateData) => {
  const response = await api.patch(`/communities/${communityId}`, updateData);

  return response.data;
};

/**
 * Archive Community
 */
export const archiveCommunity = async (communityId) => {
  const response = await api.delete(`/communities/${communityId}`);

  return response.data;
};
