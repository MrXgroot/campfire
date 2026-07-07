import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import env from "./config/env.js";

import authRoutes from "./modules/auth/auth.routes.js";
import campRoutes from "./modules/camp/camp.routes.js";
import communityRoutes from "./modules/community/community.routes.js";
const app = express();
const allowedOrigins=["http://localhost:5173",env.CLIENT_URL].filter(Boolean)
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);
console.log(env.CLIENT_URL);
app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/camps", campRoutes);
app.use("/api/community", communityRoutes);
export default app;
