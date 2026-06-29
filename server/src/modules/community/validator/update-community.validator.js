import { z } from "zod";

const updateCommunitySchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Community name must be at least 3 characters.")
    .max(50, "Community name cannot exceed 50 characters.")
    .optional(),

  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters.")
    .max(500, "Description cannot exceed 500 characters.")
    .optional(),

  avatar: z.string().url("Avatar must be a valid URL.").optional(),

  banner: z.string().url("Banner must be a valid URL.").optional(),
});

export default updateCommunitySchema;
