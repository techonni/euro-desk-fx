export const SITE = {
  name: 'Euro Desk FX',
  publisher: 'Techonni',
  byline: 'Euro Desk FX by Techonni',
  tagline: 'Lifetime VIP ideas on EURUSD and GBPUSD',
  description:
    'Euro Desk FX by Techonni. Lifetime VIP access to a private ideas channel on EURUSD and GBPUSD, plus free beginner guides. This is not financial advice.',
  site: 'https://fx.techonni.com',
  base: '/',
  telegramInvite: 'https://t.me/+7YZHnxMQnp5hYTZk',
  vipPath: '/vip/',
  vipPrice: '€77',
  checkoutSku: 'fx-vip',
  checkoutUrl: 'https://shop-nu-ten-29.vercel.app/api/checkout?sku=fx-vip',
  x: 'https://x.com/techonni',
  xHandle: '@techonni',
  pairs: ['EURUSD', 'GBPUSD'] as const,
  locale: 'en',
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
