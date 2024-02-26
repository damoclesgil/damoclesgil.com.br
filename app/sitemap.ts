import { allPosts } from 'contentlayer/generated';
import { MetadataRoute } from 'next';
 
const postsSitemap: MetadataRoute.Sitemap = allPosts.map((post) => ({
  url: `https://damoclesgil.com.br/posts/${post._raw.flattenedPath}`,
  lastModified: post.date,
}));
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://damoclesgil.com.br',
      lastModified: new Date(),
    },
    ...postsSitemap,
  ];
}