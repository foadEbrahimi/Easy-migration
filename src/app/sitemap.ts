import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';

const baseUrl = 'https://parastarsho.com';
const locales = ['fa', 'en'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/about', '/contact', '/blog'];
  
  const urls: MetadataRoute.Sitemap = [];

  for (const page of staticPages) {
    for (const locale of locales) {
      urls.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.8,
      });
    }
  }

  for (const post of blogPosts) {
    for (const locale of locales) {
      urls.push({
        url: `${baseUrl}/${locale}/blog/${post.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return urls;
}
