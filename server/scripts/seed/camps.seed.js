// scripts/seed/camps.seed.js

import slugify from "slugify";

import Camp from "../../src/modules/camp/models/camp.model.js";
import campsData from "./data/camps.data.js";

export async function seedCamps(users, communities) {
  const camps = campsData.map((camp) => ({
    title: camp.title,
    slug: slugify(camp.title, { lower: true, strict: true }),
    content: camp.content,

    authorId: users[camp.authorIndex]._id,
    communityId: communities[camp.communityIndex]._id,

    tags: camp.tags,
    media: [],
  }));

  const createdCamps = await Camp.insertMany(camps);

  console.log(`✅ Seeded ${createdCamps.length} camps`);

  return createdCamps;
}
