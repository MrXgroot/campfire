import User from "./../../src/modules/auth/models/user.model.js";
import Community from "./../../src/modules/community/models/community.model.js";
import Camp from "./../../src/modules/camp/models/camp.model.js";

export async function resetDatabase() {
  console.log("🗑️ Resetting database...");

  await Promise.all([
    Camp.deleteMany({}),
    Community.deleteMany({}),
    User.deleteMany({}),
  ]);

  console.log("✅ Database reset complete");
}
