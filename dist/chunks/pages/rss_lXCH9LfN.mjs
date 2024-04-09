import rss from '@astrojs/rss';
import { g as getCollection } from './__1_ZImer5.mjs';

// src/pages/rss.xml.js

async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Buzz’s Blog',
    description: 'A humble Astronaut’s guide to the stars',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    items: posts.map((post) => ({
      // Assumes all RSS feed item properties are in post frontmatter
      ...post.data,
      // Generate a `url` from each post `slug`
      // This assumes all blog posts are rendered as `/blog/[slug]` routes
      // https://docs.astro.build/en/guides/content-collections/#generating-pages-from-content-collections
      link: `/blog/${post.slug}/`,
    })),
  });
}

export { GET };
