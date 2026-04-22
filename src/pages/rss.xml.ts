import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const siteName = import.meta.env.PUBLIC_SITE_NAME || 'Avis SaaS';
  const articles = await getCollection('articles', ({ data }) => !data.draft);

  return rss({
    title: siteName,
    description:
      'Comparatifs, tests et avis indépendants sur les outils SaaS B2B pour TPE et PME françaises.',
    site: context.site?.toString() ?? 'https://avis-saas.fr',
    items: articles
      .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime())
      .map((article) => ({
        title: article.data.title,
        description: article.data.description,
        pubDate: article.data.publishedAt,
        link: `/articles/${article.slug}`,
        categories: [article.data.category, ...(article.data.tags || [])],
      })),
    customData: '<language>fr-FR</language>',
  });
}
