import dotenv from "dotenv";
import mongoose from "mongoose";

import { resetDatabase } from "../utils/resetDatabase.js";
import { seedUsers } from "./users.seed.js";
import { seedCommunities } from "./communities.seed.js";
import { seedCamps } from "./camps.seed.js";

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("🟢 MongoDB Connected");

    await resetDatabase();

    const users = await seedUsers();
    const communities = await seedCommunities(users);
    await seedCamps(users, communities);

    console.log("🎉 Database seeded successfully");
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
}

seed();
