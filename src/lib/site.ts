export const SITE = {
  name: 'Euro Desk FX',
  tagline: 'Sinais FX sem rosto — foco EURUSD e GBPUSD',
  description:
    'Euro Desk FX partilha sinais e educação FX de forma faceless. Foco em EURUSD e GBPUSD. Conteúdo gratuito no Telegram. NFA — não é aconselhamento financeiro.',
  site: 'https://techonni.github.io',
  base: '/euro-desk-fx/',
  telegram: 'https://t.me/EuroDeskFX',
  x: 'https://x.com/techonni',
  pairs: ['EURUSD', 'GBPUSD'] as const,
  locale: 'pt-PT',
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
