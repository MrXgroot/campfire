import { z } from "zod";

const updateCampSchema = z.object({
  title: z.string().trim().min(5).max(150).optional(),

  content: z.string().trim().min(10).max(5000).optional(),

  tags: z.array(z.string().trim().toLowerCase()).max(10).optional(),

  media: z
    .array(
      z.object({
        url: z.url(),
        publicId: z.string(),
        type: z.enum(["image", "video"]),
      }),
    )
    .max(10)
    .optional(),
});

export default updateCampSchema;
