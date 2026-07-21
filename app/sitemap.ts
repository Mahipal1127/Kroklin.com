import type { MetadataRoute } from 'next';

// Production domain (see components/Footer.tsx). Change here if the domain moves.
const BASE_URL = 'https://kroklin.com';

// Case-study slugs — keep in sync with the `projects` list in app/work/[slug]/page.tsx.
const workSlugs = ['ds-tour-travels', 'velora', 'brandx'];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/work`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const workRoutes: MetadataRoute.Sitemap = workSlugs.map((slug) => ({
    url: `${BASE_URL}/work/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes];
}
