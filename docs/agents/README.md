# Architecture multi-agents — avis-saas.fr

**Mise en place :** 22 avril 2026
**Objectif :** scaler la production éditoriale en parallélisant le travail sur les 3 verticales du site.

---

## Principe

Chaque verticale du site a son **agent expert dédié** :

| Agent | Fichier | Catégorie Astro | Articles en portefeuille |
|---|---|---|---|
| `expert-marketing-email` | `expert-marketing-email.md` | `marketing-email` | Brevo, Mailchimp, ActiveCampaign, MailerLite, Sarbacane, HubSpot… |
| `expert-rh-paie` | `expert-rh-paie.md` | `rh-paie` | PayFit, Lucca, Personio, Factorial, Silae, Combo, Kelio… |
| `expert-gestion-projet` | `expert-gestion-projet.md` | `gestion-projet` | Notion, ClickUp, Asana, Monday, Trello, Linear, Airtable… |

Chaque agent connaît :

- **Les outils** qu'il couvre (prix, différenciateurs, cible, clé affiliée 2026).
- **Les articles déjà publiés** sur sa verticale (pour éviter les doublons).
- **Le backlog phase 4** (15 nouvelles idées d'articles prêtes à être rédigées).
- **La voix éditoriale** et le format calibré (frontmatter, ComparisonTable, FAQ, maillage).

---

## Deux modes d'utilisation

### Mode 1 — Sessions de travail parallèles (vrai parallélisme)

Quand Mathieu demande une salve d'articles ("écris 3 articles cette semaine"), on lance 3 sous-agents en parallèle. Chacun prend 1 article dans son backlog, rédige, produit le `.mdx` prêt à commit. Le travail est réellement simultané, temps de production divisé par 3.

Usage type :
```
"Go, un article par agent sur leur prochain sujet prioritaire."
```

### Mode 2 — Cadence autonome (scheduled tasks)

Pour publier régulièrement même quand Mathieu n'est pas là, on configure des tâches planifiées :

- **Lundi 10h** → `expert-marketing-email` rédige 1 article.
- **Mercredi 10h** → `expert-rh-paie` rédige 1 article.
- **Vendredi 10h** → `expert-gestion-projet` rédige 1 article.

Résultat : 12 articles/mois en automatique, parfaitement calibrés SEO.

**Important :** cette cadence ne doit être activée qu'après le warm-up SEO (4 à 6 semaines après la mise en ligne) pour éviter un signal "flood" côté Google.

---

## Règles communes à tous les agents

1. **Ne jamais dupliquer un article existant.** Toujours vérifier la liste des articles publiés avant d'attaquer.
2. **Respecter strictement le format Astro calibré** : frontmatter validé par le Zod schema (`src/content/config.ts`), composants `<AffiliateCta>` et `<ComparisonTable>` importés, 8 FAQ pour schema.org.
3. **Maillage interne** : chaque article doit lier vers au moins 3 autres articles de sa verticale, idéalement 1 article d'une autre verticale (cross-pollination topique).
4. **Clés affiliées uniquement depuis `src/data/affiliates.ts`** (ne jamais inventer une clé).
5. **Ton éditorial** : français natif, direct, matter-of-fact, aucun superlatif creux. Phrases courtes. Zéro émoji dans les articles.
6. **Longueur cible** : 2 500 à 3 000 mots pour un pilier, 1 800 à 2 500 mots pour un long-tail.
7. **Frontmatter contrôlé** : `title` entre 20 et 75 caractères, `description` entre 120 et 170.

---

## Mise à jour des briefs

Après chaque article publié, l'agent doit :

1. Ajouter le nouveau slug dans sa section "Articles déjà publiés".
2. Retirer l'idée correspondante du backlog.
3. Si pertinent, enrichir le backlog avec 1-2 nouvelles idées repérées au fil de la rédaction.

Le brief est un document vivant. Mathieu peut aussi l'éditer directement pour ajuster la stratégie (prix, angle, priorisation).

---

## Qui supervise ?

Claude (en rôle "chef éditorial cross-verticales") reste orchestrateur. Il :

- Répartit les demandes sur le bon agent.
- Arbitre les conflits de territoire (qui écrit "HubSpot vs Pipedrive" ? → marketing-email en priorité, RH si angle commercial RH).
- Valide la cohérence cross-verticales (cross-links, éviter les contradictions factuelles).
- Met à jour `STATUS.md` après chaque salve de publication.

---

## Démarrage

Pour lancer une session multi-agents :

```
"Lance les 3 agents en parallèle, chacun sur [tâche spécifique]."
```

Exemples :
- "Lance les 3 agents, chacun écrit son prochain article prioritaire du backlog."
- "Lance les 3 agents, chacun audite le SEO on-page de ses articles existants et liste les améliorations."
- "Lance les 3 agents, chacun recherche les opportunités de backlinks sur sa verticale."

Claude traduit la demande en 3 sous-agents lancés simultanément, puis consolide les résultats.
