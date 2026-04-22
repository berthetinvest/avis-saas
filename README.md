# Avis SaaS

Média indépendant qui teste et compare les outils SaaS B2B pour TPE et PME françaises.

Stack : **Astro 5** · **Tailwind CSS** · **MDX** · **Vercel**.

---

## Quick start

```bash
# 1. Installer les dépendances
npm install

# 2. Copier le fichier d'environnement
cp .env.example .env.local

# 3. Éditer .env.local avec tes vraies valeurs :
#    - PUBLIC_SITE_URL=https://ton-domaine.fr
#    - PUBLIC_SITE_NAME=TonSite
#    - PUBLIC_GA4_ID=G-XXXXXXXXXX   (si tu utilises GA4)
#    - PUBLIC_BEEHIIV_PUBLICATION_ID=...  (quand Beehiiv est prêt)

# 4. Lancer le dev server
npm run dev

# 5. Build de production
npm run build

# 6. Preview du build
npm run preview
```

## Remplacer les placeholders

À réception du domaine et du nom de marque définitifs, remplace les placeholders :

```bash
# Remplace tous les placeholders d'un coup dans tous les fichiers pertinents
find . -type f \( -name "*.astro" -o -name "*.ts" -o -name "*.tsx" -o -name "*.mdx" -o -name "*.md" -o -name "*.json" -o -name "*.mjs" -o -name "*.xml" -o -name "*.txt" \) \
  -not -path "./node_modules/*" -not -path "./dist/*" -not -path "./.git/*" \
  -exec sed -i '' 's|Avis SaaS|AvisSaaS|g' {} \;

# Même chose pour le domaine, l'auteur, et les infos légales
# (à faire une fois ces infos connues)
```

Sur Linux, remplace `sed -i ''` par `sed -i`.

## Arborescence

```
src/
  components/       # composants réutilisables (Header, Footer, SEO, CTA…)
  layouts/          # BaseLayout, ArticleLayout, PageLayout
  content/
    config.ts       # schémas Zod des collections
    articles/       # les articles MDX (1 fichier = 1 article)
    tools/          # fiches produit SaaS normalisées
  data/
    affiliates.ts   # config centralisée des liens d'affiliation
  pages/            # routes (index, articles/, categories/, pages légales…)
  styles/globals.css
  utils/            # helpers (affiliate, seo…)
public/             # assets statiques (favicon, robots.txt, images)
```

## Écrire un nouvel article

Créer un fichier `src/content/articles/mon-article.mdx` avec l'en-tête YAML :

```yaml
---
title: "Titre optimisé SEO (50-70 caractères)"
description: "Meta description (120-170 caractères, inclut le mot-clé principal)."
category: "marketing-email"  # ou rh-paie / gestion-projet / guides-generaux
tags: ["brevo", "mailchimp", "email marketing"]
publishedAt: 2026-04-22
author: "Mathieu"
draft: false
toolsCompared: ["brevo", "mailchimp"]  # slugs des tools
faq:
  - question: "Quelle question ?"
    answer: "La réponse."
---
```

Le build **plante** si des champs obligatoires manquent (sécurité Zod). C'est voulu.

## Gestion des liens d'affiliation

Toutes les URLs d'affiliation sont centralisées dans `src/data/affiliates.ts`.
Utiliser **toujours** le composant `<AffiliateCta affiliateKey="brevo" />` —
jamais de lien en dur dans un article.

Tant qu'un programme est en `status: "pending"`, le lien pointe vers l'URL
brute de l'éditeur (aucune commission, mais ça ne casse pas l'article).
Passer à `status: "active"` + ajouter `targetUrl` dès validation du programme.

## Déploiement Vercel

1. Push sur GitHub
2. Vercel → New Project → Import from GitHub
3. Ajouter les variables d'environnement dans Project Settings
4. Chaque `git push` → redéploiement automatique

## Commandes utiles

```bash
npm run dev        # serveur dev (localhost:4321)
npm run build      # build prod dans dist/
npm run preview    # preview du build
npm run check      # type check Astro + TypeScript
npm run format     # Prettier
```
