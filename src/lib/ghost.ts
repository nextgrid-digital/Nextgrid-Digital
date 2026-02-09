import { createServerFn } from '@tanstack/react-start'
import GhostContentAPI from '@tryghost/content-api'

export interface GhostPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  published_at?: string
  feature_image?: string
  url?: string
  tags?: Array<{ name: string; slug: string }>
}

function getGhostApi() {
  const url = process.env.GHOST_URL
  const key = process.env.GHOST_CONTENT_API_KEY
  if (!url || !key) return null
  return new GhostContentAPI({ url, key, version: 'v5.0' })
}

export const getGhostPosts = createServerFn({ method: 'GET' }).handler(
  async (options?: { limit?: number; filter?: string }): Promise<GhostPost[]> => {
    const api = getGhostApi()
    if (!api) return []
    try {
      const posts = await api.posts.browse({
        limit: options?.limit ?? 20,
        include: ['tags'],
        filter: options?.filter,
      })
      return (posts as GhostPost[]) ?? []
    } catch {
      return []
    }
  }
)

export const getGhostPostsByTag = createServerFn({ method: 'GET' }).handler(
  async (tagSlug: string, limit = 20): Promise<GhostPost[]> => {
    const api = getGhostApi()
    if (!api) return []
    try {
      const posts = await api.posts.browse({
        limit,
        include: ['tags'],
        filter: `tag:${tagSlug}`,
      })
      return (posts as GhostPost[]) ?? []
    } catch {
      return []
    }
  }
)

export interface GhostPostFull extends GhostPost {
  html?: string
}

export const getGhostPostBySlug = createServerFn({ method: 'GET' }).handler(
  async (slug: string): Promise<GhostPostFull | null> => {
    const api = getGhostApi()
    if (!api) return null
    try {
      const post = await api.posts.read({ slug }, { include: ['tags'] })
      return post as GhostPostFull
    } catch {
      return null
    }
  }
)
