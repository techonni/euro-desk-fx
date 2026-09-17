export const SITE = {
  name: 'Euro Desk FX',
  tagline: 'Free FX ideas focused on EURUSD and GBPUSD',
  description:
    'Euro Desk FX shares free FX education and market ideas focused on EURUSD and GBPUSD. Join the free Telegram channel. This is not financial advice.',
  site: 'https://www.techonni.com',
  base: '/',
  telegram: 'https://t.me/EuroDeskFX',
  x: 'https://x.com/eurodeskfx',
  xHandle: '@eurodeskfx',
  pairs: ['EURUSD', 'GBPUSD'] as const,
  locale: 'en',
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
