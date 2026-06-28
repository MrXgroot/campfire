import { z } from "zod";

const createCampSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Title must be at least 5 characters.")
    .max(150, "Title cannot exceed 150 characters."),

  content: z
    .string()
    .trim()
    .min(10, "Content must be at least 10 characters.")
    .max(5000, "Content cannot exceed 5000 characters."),

  communityId: z.string().min(1, "Community is required."),

  tags: z
    .array(z.string().trim().toLowerCase())
    .max(10, "Maximum 10 tags are allowed.")
    .optional()
    .default([]),

  media: z
    .array(
      z.object({
        url: z.url(),
        publicId: z.string(),
        type: z.enum(["image", "video"]),
      }),
    )
    .max(10, "Maximum 10 media files are allowed.")
    .optional()
    .default([]),
});

export default createCampSchema;
