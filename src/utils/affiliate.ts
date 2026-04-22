import { affiliates, type AffiliateEntry } from '@data/affiliates';

/**
 * Résout un lien d'affiliation à partir de sa clé.
 * Retourne l'URL affiliée si le programme est actif, sinon l'URL brute.
 *
 * Usage :
 *   import { getAffiliateUrl } from '@utils/affiliate';
 *   const url = getAffiliateUrl('brevo');
 */
export function getAffiliateUrl(key: string): string {
  const entry = affiliates[key];
  if (!entry) {
    console.warn(`[affiliate] Clé inconnue: ${key}`);
    return '#';
  }
  if (entry.status === 'active' && entry.targetUrl) {
    return entry.targetUrl;
  }
  return entry.rawUrl;
}

/**
 * Retourne l'entrée complète (utile pour l'admin ou le debug).
 */
export function getAffiliate(key: string): AffiliateEntry | undefined {
  return affiliates[key];
}

/**
 * Indique si le lien est actuellement monétisé (pour afficher/cacher la divulgation).
 */
export function isMonetized(key: string): boolean {
  return affiliates[key]?.status === 'active';
}

/**
 * Attributs rel standards pour un lien sponsorisé (Google guidelines).
 */
export function affiliateLinkAttrs(key: string) {
  const monetized = isMonetized(key);
  return {
    rel: monetized ? 'sponsored noopener nofollow' : 'noopener',
    target: '_blank',
  };
}
