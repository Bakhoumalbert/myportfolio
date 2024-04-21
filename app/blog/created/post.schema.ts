import { z } from "zod";

export const POST_STATE = ["HIDDEN", "PUBLISHED"] as const;

export const PostDetailSchema = z.object({
  id: z.number().int(),
  userId: z.string(),
  title: z.string(),
  content: z.string(),
  type: z.string(),
  published: z.boolean().default(false),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().nullable(),
  author: z.object({
    id: z.number().int(),
    email: z.string(),
    name: z.string().nullable(),
  }).nullable(),
});


