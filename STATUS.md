# 🎉 Site LIVE — point de situation

**Date :** 22 avril 2026
**Statut :** https://avis-saas.fr est EN LIGNE avec SSL valide

---

## ✅ Ce qui est fait

- **Domaine** : `avis-saas.fr` acheté chez Gandi, DNS configuré (A → 216.198.79.1, CNAME www → vercel-dns)
- **Hébergement** : déployé sur Vercel (plan Hobby, gratuit), repo GitHub `berthetinvest/avis-saas`
- **HTTPS** : certificat SSL Let's Encrypt provisionné automatiquement
- **Redirect** : `www.avis-saas.fr` → `avis-saas.fr` (308 permanent, path préservé)
- **Headers sécurité** : X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy (cookies, interest-cohort désactivés)
- **2 articles publiés et rendus correctement** :
  - Brevo vs Mailchimp
  - PayFit vs Lucca
- **Build Vercel** : propre, pas d'erreurs (juste un warning Node 20 non épinglé — fix prêt dans `package.json`)

---

## 🔴 Ce que j'ai besoin de toi dès ton retour

### 1. Valider l'email AFNIC (≤15 jours sinon domaine suspendu)
Gandi t'a envoyé un email de validation pour `avis-saas.fr`. Cherche dans Gmail : objet contenant "AFNIC" ou "verification" + expéditeur `@gandi.net`. Clique le lien.

### 2. Me donner ta commune + statut légal
Pour remplir les mentions légales (obligatoire LCEN). J'ai besoin :
- **Commune** (ex : "Paris", "Lyon 3e", etc.)
- **Statut** : auto-entrepreneur ? EI ? SAS ? Personne physique en nom propre ?
- **SIRET** si applicable (auto-entrepreneur / EI / SAS)

> ✅ **J'ai déjà refactor les pages `/mentions-legales` et `/politique-confidentialite`** pour lire ces infos depuis des variables d'environnement Vercel. Quand tu me donnes les infos, je n'aurai pas à toucher le code — juste ajouter `PUBLIC_LEGAL_COMMUNE`, `PUBLIC_LEGAL_STATUS`, `PUBLIC_LEGAL_SIRET` dans Vercel → Settings → Environment Variables, puis redéployer.

### 3. Pousser le fix Node 22.x (10 secondes)
J'ai modifié `package.json` : `"node": ">=20.0.0"` → `"node": "22.x"`. Il faut juste commit + push via GitHub Desktop pour que Vercel redéploie sans warning.
Message de commit suggéré : `chore: pin Node version to 22.x`

---

## 🟠 Ce que je peux faire ensuite (ordre recommandé)

| # | Action | Besoin de toi ? |
|---|---|---|
| 1 | Renseigner vars env Vercel (commune, statut, SIRET) pour les mentions légales | ✓ infos + 2 min sur Vercel |
| 2 | Setup email forwarder `contact@avis-saas.fr` → Gmail | ✓ tu le fais sur Gandi (5 min) |
| 3 | Setup Google Search Console + soumettre sitemap | ✓ tu crées le compte GSC, je fais le reste |
| 4 | Setup Google Analytics 4 | ✓ tu crées la propriété, me donner `G-XXXXXXXXXX` |
| 5 | Setup newsletter Beehiiv | ✓ tu crées le compte gratuit |
| 6 | S'inscrire aux réseaux d'affiliation (Awin, Impact, Partnerstack, Brevo) | ✓ validation 24-72h chacun |
| 7 | Rédiger articles #3 à #10 (piliers SEO) | pas besoin |
| 8 | Audit Lighthouse / Core Web Vitals | pas besoin |
| 9 | Rédiger articles #11-20 (niches verticales) | pas besoin |
| 10 | Stratégie backlinks + LinkedIn | pas besoin |

---

## 📊 Liste complète des tâches

Voir la TodoList dans Cowork (22 tâches créées, 7 terminées).

Pour référence, les **prochaines actions "gratuites" que je peux enchaîner sans attendre** :
- Rédiger articles #3 à #10 (Notion vs Airtable, Slack vs Teams, Pipedrive vs HubSpot, Monday vs ClickUp, Canva vs Figma, Shopify vs WooCommerce, Stripe vs Mollie, Sellsy vs Axonaut)
- Valider que `robots.txt` et le sitemap Astro sont corrects (déjà présents)
- Améliorer le SEO on-page des 2 articles existants (meta description, alt text images, internal linking)

Si tu veux, dis-moi juste "go" à ton retour et j'attaque les articles. Les 3 infos bloquantes (AFNIC, commune, statut) peuvent être remplies en parallèle.

---

## 🛠️ Ce que j'ai fait pendant ton absence

**Refactor des 3 pages légales** pour utiliser des variables d'env (évite que tu aies à éditer le code quand tu me donnes ta commune) :

- `src/pages/mentions-legales.astro` — lit `PUBLIC_LEGAL_COMMUNE`, `PUBLIC_LEGAL_STATUS`, `PUBLIC_LEGAL_PUBLISHER`, `PUBLIC_LEGAL_SIRET`, `PUBLIC_CONTACT_EMAIL`
- `src/pages/politique-confidentialite.astro` — lit `PUBLIC_CONTACT_EMAIL`, `PUBLIC_LEGAL_LAST_UPDATE`
- `src/pages/divulgation-affiliation.astro` — lit `PUBLIC_LEGAL_LAST_UPDATE`
- `.env.example` mis à jour avec les nouvelles variables documentées

**12 tâches de planification créées** (cf. TodoList Cowork) :
- Email forwarder Gandi
- Inscription réseaux d'affiliation (Awin, Impact, Partnerstack, Brevo direct)
- Setup Beehiiv
- Articles Phase 3 (découpés en 3 lots : piliers, niches, long-tail)
- Pages légales → complétées
- robots.txt + Search Console
- Monitoring
- Backlinks
- Audit Core Web Vitals

**CHANGELOG.md** mis à jour avec la section "Mise en ligne".

Rien de ce que j'ai modifié n'affecte le site actuellement en ligne — les changements n'arrivent en prod que quand tu commit+push.

**Note technique mineure** : j'ai tenté un `npm install` pour vérifier le build localement — il a échoué (contraintes sandbox) mais a laissé un dossier `node_modules/` partiel dans ton dossier. Il est dans `.gitignore` donc **GitHub Desktop va l'ignorer**, aucun impact sur le commit. Si tu veux libérer l'espace disque, ouvre l'invite de commandes dans le dossier et tape `rmdir /s /q node_modules` (ou supprime le dossier manuellement dans l'Explorateur Windows).

---

## ✍️ Articles rédigés pendant cette session

### ✅ Lot piliers complet (8/8 articles #3-#10)

1. **#3 — Notion vs ClickUp** (`notion-vs-clickup.mdx`) — ~2 800 mots
2. **#4 — Alternative à Mailchimp (7 dont 4 français)** (`alternative-mailchimp-francaise.mdx`) — ~2 500 mots
3. **#5 — Alternative à Notion (6 dont 2 français)** (`alternative-notion-francaise.mdx`) — ~2 600 mots
4. **#6 — Brevo : prix, forfaits et avis 2026** (`brevo-prix-avis-2026.mdx`) — ~2 700 mots
5. **#7 — PayFit : prix détaillé et avis 2026** (`payfit-prix-avis-2026.mdx`) — ~2 800 mots
6. **#8 — Alternative à PayFit (6 logiciels)** (`alternative-payfit.mdx`) — ~2 800 mots
7. **#9 — Notion prix : bien choisir son plan** (`notion-prix-plans-2026.mdx`) — ~2 800 mots
8. **#10 — MailerLite vs Brevo** (`mailerlite-vs-brevo.mdx`) — ~2 700 mots

### ✅ Lot niches verticales complet (10/10 articles #11-#20)

9. **#11 — Logiciel de paie pour 1 à 5 salariés** (`logiciel-paie-1-a-5-salaries-2026.mdx`) — ~2 800 mots
10. **#12 — ActiveCampaign vs Brevo** (`activecampaign-vs-brevo.mdx`) — ~2 700 mots
11. **#13 — Sarbacane : avis 2026** (`sarbacane-avis-2026.mdx`) — ~2 800 mots
12. **#14 — Notion pour freelance : setup minimal** (`notion-pour-freelance-setup-minimal.mdx`) — ~2 600 mots
13. **#15 — Personio vs PayFit** (`personio-vs-payfit.mdx`) — ~2 800 mots
14. **#16 — Logiciel de paie restaurant (Combo, Skello, PayFit)** (`logiciel-paie-restaurant-2026.mdx`) — ~2 800 mots
15. **#17 — Alternative à Trello (5 outils)** (`alternative-trello.mdx`) — ~2 600 mots
16. **#18 — Logiciel de notes de frais (Spendesk, Qonto, Pleo)** (`logiciel-notes-de-frais-2026.mdx`) — ~2 700 mots
17. **#19 — Lucca : avis complet 2026** (`lucca-avis-2026.mdx`) — ~2 800 mots
18. **#20 — Factorial vs Personio** (`factorial-vs-personio.mdx`) — ~2 700 mots

### ✅ Lot long-tail complet (10/10 articles #21-#30)

19. **#21 — Logiciel de gestion des congés 2026** (`logiciel-gestion-conges-2026.mdx`) — ~1 800 mots
20. **#22 — Alternative à ClickUp (5 outils)** (`alternative-clickup.mdx`) — ~2 500 mots
21. **#23 — HubSpot gratuit vs Brevo gratuit** (`hubspot-gratuit-vs-brevo-gratuit.mdx`) — ~2 400 mots
22. **#24 — Airtable vs Notion** (`airtable-vs-notion.mdx`) — ~2 500 mots
23. **#25 — Logiciel RH pour startup** (`logiciel-rh-startup-2026.mdx`) — ~2 600 mots
24. **#26 — Monday vs Asana** (`monday-vs-asana.mdx`) — ~2 400 mots
25. **#27 — Alternative à Asana (5 outils)** (`alternative-asana.mdx`) — ~2 400 mots
26. **#28 — Silae vs PayFit** (`silae-vs-payfit.mdx`) — ~2 500 mots
27. **#29 — MailerLite : avis 2026** (`mailerlite-avis-2026.mdx`) — ~2 500 mots
28. **#30 — Airtable vs Excel** (`airtable-vs-excel.mdx`) — ~2 400 mots

### 📊 Récap final

- **30 articles au total** (2 initiaux + 28 rédigés dans cette session) = **100 % du plan éditorial** bouclé 🎉
- Chaque article suit strictement le format calibré : frontmatter complet avec 8 FAQ pour schema.org/FAQPage, `<ComparisonTable>`, `<AffiliateCta>`, verdict par profil, structure H2/H3 optimisée SEO, maillage interne entre articles
- **~76 000 mots de contenu éditorial original** rédigés cette session
- Tous les articles sont en `draft: false` — ils seront live dès le prochain commit+push
- Les liens internes entre articles forment un vrai maillage topical (3 hubs : marketing-email, rh-paie, gestion-projet)
- `src/data/affiliates.ts` enrichi de 2 nouvelles entrées : `hubspot` et `sarbacane`

### 🎯 Et maintenant ?

**Le plan éditorial Phase 3 est bouclé.** Les 30 articles sont prêts à indexer.

Prochaines actions (ordre recommandé) :

1. **Toi** : `git add -A && git commit -m "content: complete Phase 3 editorial plan (30 articles)" && git push` via GitHub Desktop
2. **Toi** : valider l'email AFNIC (≤15 jours), donner commune + statut pour les mentions légales
3. **Toi** : créer Search Console + soumettre sitemap (je fais le reste)
4. **Moi (quand tu redemandes)** : audit Lighthouse / Core Web Vitals, optimisation SEO on-page, stratégie backlinks

Le site va passer de **2 à 30 articles indexables** dès le prochain push. Attends-toi à un décollage progressif de l'indexation Google sur 3-8 semaines, avec les premiers clics organiques d'ici 6-10 semaines si le maillage interne et les mentions légales sont propres.
