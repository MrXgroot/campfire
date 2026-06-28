import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import env from "./config/env.js";

import authRoutes from "./modules/auth/auth.routes.js";
import campRoutes from "./modules/camp/camp.routes.js";

const app = express();

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  }),
);
console.log(env.CLIENT_URL);
app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/camps", campRoutes);

export default app;
