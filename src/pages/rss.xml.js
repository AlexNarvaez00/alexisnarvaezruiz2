import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export function GET(context) {
  const posts = getCollection("blog");
  return rss({
    title: "",
    description: "",
    site: context.site,
    items: posts.map((post) => ({
      ...post,
      link: `/blog/${post.slug}/`,
    })),
  });
}
