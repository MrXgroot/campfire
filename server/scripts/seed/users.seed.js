// scripts/seed/seedUsers.js

import bcrypt from "bcrypt";
import User from "../../src/modules/auth/models/user.model.js";

export async function seedUsers() {
  await User.deleteMany();

  const users = [];

  for (let i = 1; i <= 5; i++) {
    users.push({
      username: `sukesh${i}`,
      email: `sukesh${i}@campfire.dev`,
      password: await bcrypt.hash("12345678", 10),
      emailVerified: true,
    });
  }

  const createdUsers = await User.insertMany(users);

  console.log(`✅ Seeded ${createdUsers.length} users`);

  return createdUsers;
}
