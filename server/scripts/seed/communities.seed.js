// scripts/seed/communities.seed.js

import slugify from "slugify";

import Community from "../../src/modules/community/models/community.model.js";
import communitiesData from "./data/communities.data.js";

export async function seedCommunities(users) {
  const communities = communitiesData.map((community) => ({
    name: community.name,
    slug: slugify(community.name, {
      lower: true,
      strict: true,
    }),
    description: community.description,

    ownerId: users[community.ownerIndex]._id,

    avatar: community.avatar,
    banner: community.banner,
  }));

  const createdCommunities = await Community.insertMany(communities);

  console.log(`✅ Seeded ${createdCommunities.length} communities`);

  return createdCommunities;
}
