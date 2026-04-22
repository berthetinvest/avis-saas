# Changelog

Toutes les modifications notables du projet — format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/).

## [Non publié]

### 2026-04-22 — Bootstrap initial

**Phase 1 — Setup technique (fait en une session)**

- Création de l'arborescence Astro complète
- `package.json` avec Astro 5, Tailwind 3, MDX, Sitemap
- Configuration Astro (sitemap FR, trailing slash strict, MDX)
- Tailwind + `@tailwindcss/typography` avec palette "média premium"
- TypeScript strict + path aliases (`@components`, `@layouts`, `@data`, `@utils`)
- Content Collections typées avec Zod (articles + tools)
- Composants :
    - `Seo.astro` — meta tags dynamiques (OG, Twitter Card, canonical)
    - `SchemaArticle.astro` — JSON-LD `schema.org/Article`
    - `SchemaFaq.astro` — JSON-LD `schema.org/FAQPage` (rich snippets)
    - `SchemaReview.astro` — JSON-LD `schema.org/Review` imbriqué
    - `SchemaBreadcrumb.astro` — JSON-LD `schema.org/BreadcrumbList`
    - `Header.astro` — nav responsive avec menu mobile
    - `Footer.astro` — liens + divulgation
    - `AffiliateDisclosure.astro` — bandeau RGPD/DGCCRF/ARPP
    - `AffiliateCta.astro` — CTA avec résolution auto des liens affiliés
    - `ComparisonTable.astro` — tableau comparatif générique
    - `ArticleCard.astro` — carte article pour listings
    - `NewsletterEmbed.astro` — embed Beehiiv
- Layouts `BaseLayout`, `ArticleLayout`, `PageLayout`
- Pages :
    - `index.astro` — homepage avec hero + catégories + derniers articles
    - `articles/index.astro` — liste globale
    - `articles/[...slug].astro` — route dynamique d'article
    - `categories/[category].astro` — pages de catégorie
    - `mentions-legales.astro` — LCEN compliant
    - `politique-confidentialite.astro` — RGPD compliant
    - `divulgation-affiliation.astro` — DGCCRF/ARPP compliant
    - `a-propos.astro`
    - `contact.astro`
    - `404.astro`
    - `rss.xml.ts` — flux RSS généré
- `robots.txt` + sitemap auto via `@astrojs/sitemap`
- `vercel.json` avec headers sécurité + cache
- `.env.example` avec toutes les variables
- `.github/workflows/ci.yml` (build check sur PR)
- Gestion centralisée des liens d'affiliation (`src/data/affiliates.ts`)
    - 18 SaaS pré-configurés sur les 3 verticales prioritaires
    - Helper `getAffiliateUrl()` avec fallback automatique si programme non validé

**Phase 2 — Stratégie éditoriale**

- Keyword research 100+ mots-clés FR sur 3 verticales (`docs/keyword-research.md`)
- Calendrier éditorial des 30 premiers articles (`docs/editorial-calendar.md`)

**Phase 4 — Affiliation**

- Guide complet des programmes d'affiliation à rejoindre (`docs/affiliation-guide.md`)

**Premiers articles**

- 2 articles complets rédigés avec prix vérifiés (`src/content/articles/`)

### 2026-04-22 — Mise en ligne

- Domaine `avis-saas.fr` acheté chez Gandi (+ AFNIC validation en attente)
- DNS configuré : A @ → 216.198.79.1, CNAME www → cb2d1e3bbed5424d.vercel-dns-017.com
- Déploiement Vercel connecté au repo `github.com/berthetinvest/avis-saas`
- Custom domain + www redirect 308 vers l'apex configuré sur Vercel
- Certificat SSL Let's Encrypt auto-provisionné
- Site LIVE sur https://avis-saas.fr avec HTTPS valide
- `package.json` : Node pin `22.x` (au lieu de `>=20.0.0`) pour retirer warning Vercel
- Pages `/mentions-legales`, `/politique-confidentialite`, `/divulgation-affiliation` refactorées pour utiliser des variables d'environnement (`PUBLIC_LEGAL_COMMUNE`, `PUBLIC_LEGAL_STATUS`, `PUBLIC_LEGAL_SIRET`, `PUBLIC_CONTACT_EMAIL`, `PUBLIC_LEGAL_LAST_UPDATE`)
- `.env.example` mis à jour avec les nouvelles variables légales
