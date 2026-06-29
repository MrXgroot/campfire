import slugify from "slugify";

import {
  createCommunity,
  findCommunityByName,
  findCommunityBySlug,
} from "./community.repository.js";

const createCommunityService = async ({ name, description, ownerId }) => {
  // Trim input
  const trimmedName = name.trim();
  const trimmedDescription = description.trim();

  // Check duplicate name
  const existingCommunity = await findCommunityByName(trimmedName);

  if (existingCommunity) {
    throw new Error("Community name already exists.");
  }

  // Generate slug
  const slug = slugify(trimmedName, {
    lower: true,
    strict: true,
  });

  // Check duplicate slug
  const existingSlug = await findCommunityBySlug(slug);

  if (existingSlug) {
    throw new Error("Community slug already exists.");
  }

  // Persist
  const community = await createCommunity({
    name: trimmedName,
    slug,
    description: trimmedDescription,
    ownerId,
  });

  return community;
};

export default createCommunityService;
