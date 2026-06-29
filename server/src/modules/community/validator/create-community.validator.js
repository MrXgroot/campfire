import { z } from "zod";

const createCommunitySchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Community name must be at least 3 characters.")
    .max(50, "Community name cannot exceed 50 characters."),

  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters.")
    .max(500, "Description cannot exceed 500 characters."),
});

export default createCommunitySchema;
