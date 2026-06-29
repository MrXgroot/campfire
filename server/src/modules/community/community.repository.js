import Community from "./models/community.model.js";

export const createCommunity = async (communityData) => {
  return await Community.create(communityData);
};

export const findCommunityById = async (communityId) => {
  return await Community.findById(communityId);
};

export const findCommunityBySlug = async (slug) => {
  return await Community.findOne({ slug });
};

export const findCommunityByName = async (name) => {
  return await Community.findOne({ name });
};

export const updateCommunity = async (communityId, updateData) => {
  return await Community.findByIdAndUpdate(communityId, updateData, {
    new: true,
  });
};

export const deleteCommunity = async (communityId) => {
  return await Community.findByIdAndDelete(communityId);
};

export const getCommunities = async () => {
  return await Community.find().sort({ createdAt: -1 });
};
