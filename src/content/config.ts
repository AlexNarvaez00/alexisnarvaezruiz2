import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const proyectsCollection = defineCollection({
  type: "content",
  scheme: z.object({
    title: z.string(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  proyects: proyectsCollection,
};
