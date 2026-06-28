import { z } from "zod";

const registerSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters.")
    .max(30, "Username cannot exceed 30 characters."),

  email: z.email("Invalid email address.").trim().toLowerCase(),

  password: z
    .string()
    .min(6, "Password must be at least 8 characters.")
    .max(100, "Password cannot exceed 100 characters."),
});

export default registerSchema;
