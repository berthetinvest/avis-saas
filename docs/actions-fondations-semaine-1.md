# Actions fondations — semaine du 22 avril 2026

**Objectif :** poser les fondations qui rendent tout le reste utile (mesurer, monétiser, sécuriser).
**Temps total estimé :** 2h30 réparties sur la semaine.
**Ordre :** strict — chaque action débloque la suivante.

---

## Action 1 — Push GitHub des 3 nouveaux articles + briefs agents

**Pourquoi :** mettre en ligne les 3 articles pilier que les agents viennent de produire (Klaviyo vs Brevo, Meilleur logiciel paie PME, ClickUp vs Asana).
**Temps :** 3 min.
**Urgence :** maintenant.

Étapes :
1. Ouvre GitHub Desktop.
2. Tu vois 6 fichiers modifiés à gauche (3 articles `.mdx` + 3 briefs agents `.md`).
3. En bas à gauche, dans le champ "Summary", tape :
   ```
   add: 3 articles pilier Phase 4 + architecture multi-agents
   ```
4. Clique le bouton bleu "Commit to main".
5. En haut, clique "Push origin".
6. Attends 2-3 minutes : Vercel va automatiquement redéployer.

Vérification : va sur avis-saas.fr/articles, tu dois voir les 3 nouveaux titres.

---

## Action 2 — Validation AFNIC (.fr)

**Pourquoi :** sans validation des coordonnées AFNIC sous 15 jours, le domaine .fr peut être suspendu. C'est l'urgence silencieuse n°1.
**Temps :** 5 min.
**Urgence :** cette semaine impérative.

Étapes :
1. Tu as dû recevoir un email de **OVH ou de l'AFNIC** intitulé "Vérification de vos coordonnées" ou "Validation propriétaire .fr".
2. Cherche dans Gmail : `from:(ovh OR afnic) avis-saas`.
3. Ouvre l'email, clique le lien de validation.
4. Confirme tes coordonnées (nom, adresse, téléphone, email).

Si tu ne trouves rien : connecte-toi sur **www.ovh.com → ton compte → Domaines → avis-saas.fr → onglet "Information générale"**. S'il y a un bandeau rouge "vérification requise", suis-le. Sinon, c'est déjà validé, passe à la suite.

---

## Action 3 — Google Search Console

**Pourquoi :** sans Search Console, on est aveugles sur ce que Google indexe, sur les requêtes qui apportent du trafic, sur les erreurs techniques. C'est l'outil n°1 du SEO.
**Temps :** 10 min.
**Urgence :** cette semaine.

Étapes :
1. Va sur **search.google.com/search-console** et connecte-toi avec ton Gmail.
2. Clique "Ajouter une propriété" → choisis **"Préfixe d'URL"** (pas "Domaine", c'est plus simple).
3. Tape : `https://avis-saas.fr` puis "Continuer".
4. Google te propose plusieurs méthodes de validation. Choisis **"Balise HTML"**.
5. Google te donne une balise du style : `<meta name="google-site-verification" content="abcd1234..." />`. Copie le contenu (la valeur après `content=`).
6. Préviens-moi avec ce code, je l'intègre dans le `<head>` du site, on push, et tu cliques "Vérifier" dans Search Console.
7. Une fois validé, retourne dans Search Console → "Sitemaps" (menu de gauche) → ajoute `sitemap.xml`.

Note : le sitemap est déjà généré par Astro, on l'a configuré dans `astro.config.mjs`.

---

## Action 4 — Google Analytics 4

**Pourquoi :** mesurer le trafic, le comportement utilisateur, les pages qui convertissent. Sans GA4, on ne sait pas quels articles cartonnent, lesquels patinent.
**Temps :** 15 min.
**Urgence :** cette semaine.

Étapes :
1. Va sur **analytics.google.com** et connecte-toi.
2. Clique "Démarrer la mesure" → crée un compte "avis-saas" → puis une propriété "avis-saas.fr" (fuseau horaire France, devise EUR).
3. Crée un flux de données "Web" : URL `https://avis-saas.fr`, nom du flux "avis-saas-web".
4. Google te donne un **ID de mesure** du style `G-XXXXXXXXXX`.
5. Préviens-moi avec cet ID, je l'intègre dans le composant `BaseLayout.astro` du site, on push, le tracking démarre dans l'heure.

---

## Action 5 — Email forwarder mathieu@avis-saas.fr

**Pourquoi :** crédibilité (pas une adresse @gmail dans les mentions légales) + récupération d'emails partenaires affiliation.
**Temps :** 10 min.
**Urgence :** cette semaine.

Étapes :
1. Va sur **www.ovh.com → ton compte → Emails → Email Pro / Hosted Email**.
2. Selon ton offre OVH, tu as soit un email gratuit inclus avec le domaine, soit pas. Si pas, prends l'offre **MX Plan gratuite** (1 boîte 5 Go incluse avec le .fr chez OVH dans la majorité des cas).
3. Crée la boîte **mathieu@avis-saas.fr**.
4. Configure une **redirection** : tous les mails reçus → forward vers `berthetinvest@gmail.com`.
5. Préviens-moi quand c'est fait, je mets à jour les mentions légales sur le site avec cette adresse.

---

## Action 6 — Programme affiliation Brevo (priorité absolue, c'est ton premier revenu attendu)

**Pourquoi :** Brevo est cité dans 8 articles déjà publiés. Sans inscription au programme, chaque conversion qui arrive ne te rapporte rien.
**Temps :** 10 min d'inscription, validation 24-72h.
**Urgence :** cette semaine.

Étapes :
1. Va sur **www.brevo.com/fr/affiliate-program/** (ou cherche "Brevo programme partenaire").
2. Clique "Devenir partenaire" / "Sign up".
3. Remplis le formulaire :
   - Site web : `https://avis-saas.fr`
   - Audience : "TPE/PME francophones, freelances"
   - Type de contenu : "Articles comparatifs SEO"
   - Volume mensuel estimé : laisse 1 000-5 000 visiteurs/mois (réaliste pour un site neuf).
4. Soumets. Validation manuelle sous 1-3 jours ouvrés.
5. Une fois validé, tu reçois un lien d'affiliation unique. Préviens-moi, je mets à jour la clé `brevo` dans `src/data/affiliates.ts` avec ton vrai lien.

---

## Action 7 — Réseaux affiliation (Impact, PartnerStack)

**Pourquoi :** ces deux plateformes regroupent les programmes de Klaviyo, ClickUp, Notion, Asana, Monday, Airtable, HubSpot, MailerLite. Une inscription unique débloque 8+ outils.
**Temps :** 20 min Impact + 15 min PartnerStack, validation 3-7 jours.
**Urgence :** cette semaine.

**Impact (impact.com)** :
1. Va sur **app.impact.com/secure/Sign-Up.ihtml**.
2. Inscris-toi en tant que "Partner / Publisher".
3. Complète ton profil (site, audience, type de contenu).
4. Cherche "Klaviyo" dans le marketplace, candidate au programme.
5. Pareil pour HubSpot, Asana (parfois sur Impact, parfois ailleurs — vérifier).

**PartnerStack (partnerstack.com)** :
1. Va sur **partnerstack.com/become-a-partner**.
2. Inscris-toi.
3. Cherche "ClickUp", "Notion", "Monday", "MailerLite" dans le marketplace, candidate aux programmes.

Une fois les programmes acceptés, tu reçois pour chacun un lien d'affiliation. Préviens-moi à chaque fois, je mets à jour `affiliates.ts`.

---

## Récap priorités

| # | Action | Temps | Quand | Bloque quoi |
|---|---|---|---|---|
| 1 | Push GitHub | 3 min | Maintenant | Mise en ligne des 3 articles |
| 2 | Validation AFNIC | 5 min | Cette semaine impératif | Suspension du domaine si oublié |
| 3 | Search Console | 10 min | Cette semaine | Indexation Google + données SEO |
| 4 | Google Analytics 4 | 15 min | Cette semaine | Mesure du trafic |
| 5 | Email mathieu@avis-saas.fr | 10 min | Cette semaine | Crédibilité + emails partenaires |
| 6 | Brevo Partners | 10 min | Cette semaine | Premier revenu affiliation |
| 7 | Impact + PartnerStack | 35 min | Cette semaine | 8+ programmes débloqués |

**Total : 1h28 de ton temps réparties sur la semaine.**

---

## Ce que je fais en parallèle pendant que tu exécutes

- Quand tu me donnes les codes Search Console + GA4, j'intègre dans le site et on push (5 min de mon côté).
- Quand tu valides Brevo / Impact / PartnerStack, je mets à jour `affiliates.ts` avec les vrais liens.
- Pendant que tu fais les démarches, je peux pré-rédiger 1-2 articles supplémentaires pour la semaine prochaine si tu veux maintenir le rythme.

---

## Ce qu'on fait après cette semaine

- Semaine 2 : Lighthouse audit (perf, accessibilité, SEO on-page) + 1 salve de 3 articles P1.
- Semaine 3-4 : monitoring premiers résultats Search Console (impressions, requêtes émergentes), 1 salve d'articles.
- Semaine 5-6 : si tracking solide et premières données, on active la cadence automatique (3 articles/semaine en autopilot).
