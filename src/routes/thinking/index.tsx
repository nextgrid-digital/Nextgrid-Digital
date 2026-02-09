import { createFileRoute, Link } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'
import { getGhostPosts } from '@/lib/ghost'

export const Route = createFileRoute('/thinking/')({
  component: ThinkingIndexPage,
  loader: async () => {
    const posts = await getGhostPosts({ limit: 20 })
    return { posts }
  },
  head: () => ({
    meta: [
      { title: 'Thinking | Nextgrid Digital' },
      {
        name: 'description',
        content: 'Essays and posts on execution, systems, and learning in public.',
      },
    ],
  }),
})

function ThinkingIndexPage() {
  const { posts } = Route.useLoaderData()
  return (
    <PageLayout
      title="Thinking"
      description="Essays and posts on how we work and learn."
    >
      <nav className="flex flex-col gap-4 mt-6">
        <Link
          to="/thinking/execution"
          viewTransition
          className="link-accent underline"
        >
          Execution
        </Link>
        <Link
          to="/thinking/systems"
          viewTransition
          className="link-accent underline"
        >
          Systems
        </Link>
        <Link
          to="/thinking/learning-in-public"
          viewTransition
          className="link-accent underline"
        >
          Learning in Public
        </Link>
      </nav>
      {posts.length > 0 ? (
        <ul className="mt-8 space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border-b border-slate-700/50 pb-4">
              <Link
                to="/thinking/$slug"
                params={{ slug: post.slug } as { slug: string }}
                viewTransition
                className="link-accent font-medium"
              >
                {post.title}
              </Link>
              {post.excerpt && (
                <p className="text-muted text-sm mt-1 line-clamp-2">
                  {post.excerpt}
                </p>
              )}
              {post.published_at && (
                <time className="text-muted text-xs mt-1 block">
                  {new Date(post.published_at).toLocaleDateString()}
                </time>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 text-muted">
          Blog posts from Ghost will be listed here when configured. Set
          GHOST_URL and GHOST_CONTENT_API_KEY in .env.
        </p>
      )}
    </PageLayout>
  )
}
