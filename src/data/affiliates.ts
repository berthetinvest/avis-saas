/**
 * Configuration centralisée des liens d'affiliation.
 *
 * Règle d'or : AUCUN lien affilié en dur dans les articles.
 * Toujours passer par la fonction `getAffiliateUrl()` de /src/utils/affiliate.ts.
 * Si Brevo change son tracking demain, tu modifies UNE ligne ici, tous les articles suivent.
 *
 * Pour chaque entrée :
 * - `key` : identifiant unique utilisé dans les articles (ex: "brevo")
 * - `productName` : nom affiché
 * - `targetUrl` : URL de destination (avec le code d'affiliation dedans)
 * - `network` : plateforme (Awin, Impact, direct…)
 * - `commission` : note interne (ne pas afficher publiquement)
 * - `cookieDuration` : durée du cookie d'attribution
 * - `status` : "pending" (pas encore inscrit) | "active" | "rejected"
 *
 * ⚠️ Remplace les `targetUrl` par tes vrais liens une fois tes codes affiliés obtenus.
 *    Tant que status !== "active", le lien pointe vers l'URL brute de l'outil.
 */

export type AffiliateNetwork =
  | 'direct'
  | 'awin'
  | 'impact'
  | 'partnerstack'
  | 'reseau-francais';

export type AffiliateStatus = 'pending' | 'active' | 'rejected';

export interface AffiliateEntry {
  key: string;
  productName: string;
  /** URL brute du produit (fallback si pas encore inscrit) */
  rawUrl: string;
  /** URL avec code d'affiliation (utilisée quand status === "active") */
  targetUrl?: string;
  network: AffiliateNetwork;
  commission?: string; // note interne
  cookieDuration?: string;
  status: AffiliateStatus;
  notes?: string;
}

export const affiliates: Record<string, AffiliateEntry> = {
  // ============================================================
  // MARKETING & EMAIL
  // ============================================================
  brevo: {
    key: 'brevo',
    productName: 'Brevo',
    rawUrl: 'https://www.brevo.com/fr/',
    network: 'direct',
    commission: '5€ / freemium + commission sur payant',
    cookieDuration: '90 jours',
    status: 'pending',
    notes: 'Programme partenaire FR direct : https://www.brevo.com/fr/programme-partenaire/',
  },
  mailchimp: {
    key: 'mailchimp',
    productName: 'Mailchimp',
    rawUrl: 'https://mailchimp.com/fr/',
    network: 'impact',
    commission: '30% première année',
    cookieDuration: '30 jours',
    status: 'pending',
    notes: 'Via Impact.com',
  },
  activecampaign: {
    key: 'activecampaign',
    productName: 'ActiveCampaign',
    rawUrl: 'https://www.activecampaign.com/fr',
    network: 'direct',
    commission: '20-30% récurrent',
    cookieDuration: '90 jours',
    status: 'pending',
  },
  mailerlite: {
    key: 'mailerlite',
    productName: 'MailerLite',
    rawUrl: 'https://www.mailerlite.com/',
    network: 'partnerstack',
    commission: '30% récurrent à vie',
    cookieDuration: '30 jours',
    status: 'pending',
    notes: 'Excellent taux de conversion (prix bas)',
  },
  getresponse: {
    key: 'getresponse',
    productName: 'GetResponse',
    rawUrl: 'https://www.getresponse.com/fr',
    network: 'direct',
    commission: '33% récurrent OU 100$ one-time',
    cookieDuration: '120 jours',
    status: 'pending',
  },
  klaviyo: {
    key: 'klaviyo',
    productName: 'Klaviyo',
    rawUrl: 'https://www.klaviyo.com/',
    network: 'partnerstack',
    commission: 'variable selon volume',
    cookieDuration: '90 jours',
    status: 'pending',
    notes: 'Spécifique e-commerce — programme sur invitation',
  },
  hubspot: {
    key: 'hubspot',
    productName: 'HubSpot',
    rawUrl: 'https://www.hubspot.com/fr/',
    network: 'impact',
    commission: '15-30% récurrent 12 mois',
    cookieDuration: '90 jours',
    status: 'pending',
    notes: 'Solutions Partner Program — via Impact',
  },
  sarbacane: {
    key: 'sarbacane',
    productName: 'Sarbacane',
    rawUrl: 'https://www.sarbacane.com/',
    network: 'direct',
    commission: 'à négocier — programme apporteur',
    status: 'pending',
    notes: 'Éditeur français historique — contact commercial',
  },

  // ============================================================
  // RH & PAIE
  // ============================================================
  payfit: {
    key: 'payfit',
    productName: 'PayFit',
    rawUrl: 'https://payfit.com/fr/',
    network: 'direct',
    commission: 'variable — programme apporteur d\'affaires',
    cookieDuration: 'à confirmer',
    status: 'pending',
    notes: 'Programme partenaire expert-comptable OU apporteur — à négocier',
  },
  lucca: {
    key: 'lucca',
    productName: 'Lucca',
    rawUrl: 'https://www.lucca.fr/',
    network: 'direct',
    commission: 'à négocier (B2B direct)',
    status: 'pending',
    notes: 'Pas de programme public — contact commercial direct',
  },
  personio: {
    key: 'personio',
    productName: 'Personio',
    rawUrl: 'https://www.personio.com/fr/',
    network: 'impact',
    commission: '~500€ par lead qualifié',
    cookieDuration: '60 jours',
    status: 'pending',
  },
  factorial: {
    key: 'factorial',
    productName: 'Factorial',
    rawUrl: 'https://factorialhr.fr/',
    network: 'partnerstack',
    commission: '15% récurrent 12 mois',
    cookieDuration: '90 jours',
    status: 'pending',
  },
  kelio: {
    key: 'kelio',
    productName: 'Kelio',
    rawUrl: 'https://www.kelio.com/fr',
    network: 'direct',
    commission: 'à négocier',
    status: 'pending',
  },
  combohr: {
    key: 'combohr',
    productName: 'Combo',
    rawUrl: 'https://combohr.com/fr',
    network: 'direct',
    commission: 'à négocier',
    status: 'pending',
    notes: 'Spécialiste secteur CHR / retail',
  },

  // ============================================================
  // GESTION DE PROJET & COLLABORATION
  // ============================================================
  notion: {
    key: 'notion',
    productName: 'Notion',
    rawUrl: 'https://www.notion.so/fr-fr',
    network: 'impact',
    commission: '50% première année Team plan',
    cookieDuration: '90 jours',
    status: 'pending',
  },
  clickup: {
    key: 'clickup',
    productName: 'ClickUp',
    rawUrl: 'https://clickup.com/',
    network: 'partnerstack',
    commission: '20% récurrent à vie',
    cookieDuration: '60 jours',
    status: 'pending',
  },
  asana: {
    key: 'asana',
    productName: 'Asana',
    rawUrl: 'https://asana.com/fr',
    network: 'impact',
    commission: '30% première année',
    cookieDuration: '45 jours',
    status: 'pending',
  },
  monday: {
    key: 'monday',
    productName: 'monday.com',
    rawUrl: 'https://monday.com/lang/fr',
    network: 'impact',
    commission: '100$ par compte payant',
    cookieDuration: '30 jours',
    status: 'pending',
  },
  trello: {
    key: 'trello',
    productName: 'Trello',
    rawUrl: 'https://trello.com/fr',
    network: 'direct',
    commission: 'via Atlassian partner program',
    status: 'pending',
  },
  airtable: {
    key: 'airtable',
    productName: 'Airtable',
    rawUrl: 'https://airtable.com/',
    network: 'impact',
    commission: '30% première année',
    cookieDuration: '45 jours',
    status: 'pending',
  },
};

/**
 * Catégories reconnues pour grouper les liens
 */
export const affiliateCategories: Record<string, string[]> = {
  'marketing-email': ['brevo', 'mailchimp', 'activecampaign', 'mailerlite', 'getresponse', 'klaviyo', 'hubspot', 'sarbacane'],
  'rh-paie': ['payfit', 'lucca', 'personio', 'factorial', 'kelio', 'combohr'],
  'gestion-projet': ['notion', 'clickup', 'asana', 'monday', 'trello', 'airtable'],
};
