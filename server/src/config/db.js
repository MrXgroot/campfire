import mongoose from "mongoose";

import env from "./env.js";
import LoggerService from "../shared/logger/LoggerService.js";

export async function connectDatabase() {
  try {
    await mongoose.connect(env.MONGO_URI);

    LoggerService.info("MongoDB connected successfully.");
  } catch (error) {
    LoggerService.error("Failed to connect to MongoDB.", error);

    process.exit(1);
  }
}
