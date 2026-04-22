# TODO — prochaines actions hiérarchisées

## 🔴 Bloquant (à faire AVANT le premier déploiement)

### Côté Mathieu
- [ ] **Acheter le domaine** choisi (Gandi ou OVH) et me le communiquer
- [ ] **Créer le compte GitHub** (si pas déjà fait) et me donner le username
- [ ] **Créer le compte Vercel** (login GitHub)
- [ ] **Choisir un pseudo/nom d'auteur** pour les articles (ou me dire nom+prénom)
- [ ] **Créer une adresse e-mail de contact** (Gmail simple ou mail pro sur le domaine)
- [ ] **Définir le statut légal** pour les mentions légales (auto-entrepreneur ? SAS ? Personne physique ?)

### Côté Claude (moi, après tes infos)
- [ ] Remplacer tous les placeholders `Avis SaaS`, `avis-saas.fr`, `Mathieu Berthet`, `{{LEGAL_*}}`
- [ ] Initialiser le repo git + premier commit propre
- [ ] Te guider pour connecter GitHub ↔ Vercel
- [ ] Vérifier que le premier build passe sur Vercel

## 🟠 Important (semaine 2)

### Côté Mathieu
- [ ] Créer le compte **Google Search Console** et valider la propriété du domaine (via DNS)
- [ ] Créer le compte **Google Analytics 4**, récupérer le `G-XXXXXXXXXX`
- [ ] Créer le compte **Beehiiv** (newsletter) et récupérer l'ID de publication
- [ ] Soumettre le sitemap à Search Console : `https://ton-domaine.fr/sitemap-index.xml`

### Côté Claude
- [ ] Vérifier que les JSON-LD passent le [Rich Results Test](https://search.google.com/test/rich-results) Google
- [ ] Vérifier Core Web Vitals sur PageSpeed Insights

## 🟡 À faire sous 2 semaines (programmes d'affiliation)

Voir `docs/affiliation-guide.md` pour la liste complète.

### Priorités
- [ ] S'inscrire à **Awin** (agrégateur) — validation manuelle 24-72h
- [ ] S'inscrire à **Impact.com** (agrégateur)
- [ ] S'inscrire à **Partnerstack** (agrégateur SaaS)
- [ ] Programme direct **Brevo** — vérifier que le statut est "actif" puis me donner les liens
- [ ] Programme direct **ActiveCampaign**
- [ ] Programme direct **PayFit** (apporteur d'affaires — contact commercial)

À chaque programme validé : me donner le code d'affiliation / l'URL trackée, je mets à jour `src/data/affiliates.ts` en `status: "active"`.

## 🟢 Phase 3 — Production éditoriale (semaines 3-10)

Voir `docs/editorial-calendar.md` pour le calendrier des 30 premiers articles.

- [ ] Article #1 : "Brevo vs Mailchimp" (rédigé — à valider par Mathieu)
- [ ] Article #2 : "PayFit vs Lucca" (rédigé — à valider par Mathieu)
- [ ] Article #3 à #30 : à rédiger (rythme cible 5/semaine)

## 🔵 Phase 5 — SEO & croissance (mois 3+)

- [ ] Identifier opportunités backlinks FR (forums, directories, communautés)
- [ ] Créer posts de promotion pour Reddit FR, Indie Hackers, LinkedIn
- [ ] Analyse mensuelle des articles qui performent → réoptimisations
- [ ] Identification de nouveaux keywords à attaquer (trimestriel)

## 📦 Idées / backlog (non prioritaire)

- [ ] Page "Outils" listant toutes les fiches produits (si volume atteint)
- [ ] Calculateur ROI (si on vire vers hybride média + outil)
- [ ] Comparateur interactif (choix multi-critères)
- [ ] Pages d'alternative ("Alternative à Mailchimp", "Alternative à Notion" — très SEO)
- [ ] Migration analytics GA4 → Plausible quand le trafic le justifie
- [ ] i18n Belgique / Suisse si ça performe bien en France
