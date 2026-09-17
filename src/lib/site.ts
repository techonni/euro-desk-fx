export const SITE = {
  name: 'Euro Desk FX',
  publisher: 'Techonni',
  byline: 'Euro Desk FX by Techonni',
  tagline: 'Free FX ideas focused on EURUSD and GBPUSD',
  description:
    'Euro Desk FX by Techonni shares free FX education and market ideas focused on EURUSD and GBPUSD. Join the free Telegram channel. This is not financial advice.',
  site: 'https://www.techonni.com',
  base: '/',
  telegram: 'https://t.me/EuroDeskFX',
  x: 'https://x.com/eurodeskfx',
  xHandle: '@eurodeskfx',
  pairs: ['EURUSD', 'GBPUSD'] as const,
  locale: 'en',
  // Google Form formResponse URL (filled after form is created)
  newsletterFormAction: 'https://docs.google.com/forms/d/e/1FAIpQLSfs9xCOoFKH5zT9z2cmgvOtsRjE59axfKI_EtYDpx55DtoiHQ/formResponse',
  newsletterNameEntry: 'entry.1110274731',
  newsletterEmailEntry: 'entry.1946205931',
  newsletterConsentEntry: 'entry.259827322',
  newsletterSourceEntry: 'entry.452092755',
} as const;

export function withBase(path = ''): string {
  const base = SITE.base.endsWith('/') ? SITE.base.slice(0, -1) : SITE.base;
  if (!path || path === '/') return `${base}/`;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function absoluteUrl(path = ''): string {
  const p = withBase(path);
  return `${SITE.site}${p}`;
}
