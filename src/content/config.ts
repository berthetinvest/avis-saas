import { defineCollection, z } from 'astro:content';

// Collection "articles" — les comparatifs, guides et avis.
// Schéma strict : un article ne peut pas être publié sans métadonnées SEO complètes.
const articles = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      // SEO & méta
      title: z.string().min(20).max(75), // optimal Google (50-70)
      description: z.string().min(120).max(170), // meta description
      slug: z.string().optional(),

      // Classification
      category: z.enum([
        'marketing-email',
        'rh-paie',
        'gestion-projet',
        'guides-generaux',
      ]),
      tags: z.array(z.string()).default([]),

      // Publication
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      draft: z.boolean().default(false),

      // Auteur
      author: z.string().default('Mathieu Berthet'),

      // Visuel
      cover: image().optional(),
      coverAlt: z.string().optional(),

      // Structure comparative
      toolsCompared: z.array(z.string()).optional(), // slugs des outils de /content/tools/
      winner: z.string().optional(), // slug du choix éditorial

      // SEO avancé
      canonical: z.string().url().optional(),
      noindex: z.boolean().default(false),

      // FAQ structurée (injectée en schema.org/FAQPage)
      faq: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        )
        .optional(),
    }),
});

// Collection "tools" — fiches produit SaaS normalisées.
// Permet de maintenir des fiches ultra-factuelles réutilisables dans plusieurs articles.
const tools = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      slug: z.string(),
      website: z.string().url(),
      logo: image().optional(),

      category: z.enum([
        'marketing-email',
        'rh-paie',
        'gestion-projet',
      ]),

      // Tarifs (toujours vérifiés via WebSearch avant d'ajouter)
      pricing: z.object({
        currency: z.enum(['EUR', 'USD']).default('EUR'),
        startingPrice: z.number().nullable(), // prix de départ mensuel
        freeTier: z.boolean(),
        freeTrial: z.number().nullable().optional(), // durée en jours
        verifiedAt: z.coerce.date(), // IMPORTANT : date de vérif des prix
      }),

      // Positionnement
      bestFor: z.array(z.string()), // personas/cas d'usage
      notBestFor: z.array(z.string()).optional(),
      strengths: z.array(z.string()),
      weaknesses: z.array(z.string()),

      // Intégrations principales
      integrations: z.array(z.string()).optional(),

      // Affiliation
      affiliateKey: z.string().optional(), // clé vers /data/affiliates.ts

      // Métadonnées éditoriales
      ourRating: z.number().min(0).max(5).optional(),
      ourVerdict: z.string().optional(),
    }),
});

export const collections = {
  articles,
  tools,
};
