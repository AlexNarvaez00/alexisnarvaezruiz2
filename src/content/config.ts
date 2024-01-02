import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const proyectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.string().array(),
    description: z.string(),
    url: z.string().url(),
    heroImage: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
    tags: z.string().array().optional(),
    heroImage: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  proyects: proyectsCollection,
  blog
};
