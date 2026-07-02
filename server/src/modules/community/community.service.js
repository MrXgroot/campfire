import slugify from "slugify";

import {
  createCommunity,
  getCommunities,
  findCommunityById,
  findCommunityByName,
  findCommunityBySlug,
  updateCommunity,
  deleteCommunity,
} from "./community.repository.js";

export const create = async ({ name, description, ownerId }) => {
  const trimmedName = name.trim();
  const trimmedDescription = description.trim();

  const existingCommunity = await findCommunityByName(trimmedName);

  if (existingCommunity) {
    throw new Error("Community name already exists.");
  }

  const slug = slugify(trimmedName, {
    lower: true,
    strict: true,
  });

  const existingSlug = await findCommunityBySlug(slug);

  if (existingSlug) {
    throw new Error("Community slug already exists.");
  }

  return await createCommunity({
    name: trimmedName,
    slug,
    description: trimmedDescription,
    ownerId,
  });
};

export const getAll = async () => {
  return await getCommunities();
};

export const getBySlug = async (slug) => {
  const community = await findCommunityBySlug(slug);

  if (!community) {
    throw new Error("Community not found.");
  }

  return community;
};

export const getById = async (communityId) => {
  const community = await findCommunityById(communityId);

  if (!community) {
    throw new Error("Community not found.");
  }

  return community;
};

export const update = async (communityId, updateData) => {
  const community = await updateCommunity(communityId, updateData);

  if (!community) {
    throw new Error("Community not found.");
  }

  return community;
};

export const remove = async (communityId) => {
  const community = await deleteCommunity(communityId);

  if (!community) {
    throw new Error("Community not found.");
  }

  return community;
};
