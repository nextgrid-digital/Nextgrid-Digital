/**
 * Homepage image placeholders (Unsplash). Swap URLs for your own assets later.
 * All images use ?w= and ?q= for consistent sizing and quality.
 */

const UNSPLASH_BASE = 'https://images.unsplash.com'

export const homeImages = {
  hero: {
    src: `${UNSPLASH_BASE}/photo-1497366216548-37526070297c?w=1200&q=80`,
    alt: 'Collaborative workspace: team at tables with laptops and whiteboards, execution in motion.',
    width: 1200,
    height: 630,
  },
  proof: {
    src: `${UNSPLASH_BASE}/photo-1551288049-bebda4e38f71?w=800&q=80`,
    alt: 'Dashboard and data on screens: systems that turn intent into measurable outcomes.',
    width: 800,
    height: 533,
  },
  ventures: {
    src: `${UNSPLASH_BASE}/photo-1486406146926-c888a1ef3041?w=800&q=80`,
    alt: 'City and buildings: ventures and systems in the real world.',
    width: 800,
    height: 533,
  },
  blogThumbs: [
    {
      src: `${UNSPLASH_BASE}/photo-1507003211169-0a1dd7228f2d?w=600&q=80`,
      alt: 'Execution: getting from intent to outcome.',
    },
    {
      src: `${UNSPLASH_BASE}/photo-1516542076520-9f2151b9a6c2?w=600&q=80`,
      alt: 'Systems: how structure supports delivery.',
    },
    {
      src: `${UNSPLASH_BASE}/photo-1522202176988-66273c2fd55f?w=600&q=80`,
      alt: 'Learning in public: sharing the process.',
    },
  ],
} as const
