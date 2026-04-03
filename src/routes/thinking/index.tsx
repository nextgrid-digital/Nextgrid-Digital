import { createFileRoute, Link } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'
import { thinkingEmpty, thinkingIndexCopy } from '@/data/marketing-pages'
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
        content: thinkingIndexCopy.metaDescription,
      },
    ],
  }),
})

function ThinkingIndexPage() {
  const { posts } = Route.useLoaderData()
  return (
    <PageLayout title="Thinking" description={thinkingIndexCopy.intro}>
      <nav className="flex flex-col gap-3 mt-2">
        <Link to="/thinking/execution" viewTransition className="site-inline-link">
          Execution — {thinkingIndexCopy.taglineExecution}
        </Link>
        <Link to="/thinking/systems" viewTransition className="site-inline-link">
          Systems — {thinkingIndexCopy.taglineSystems}
        </Link>
        <Link
          to="/thinking/learning-in-public"
          viewTransition
          className="site-inline-link"
        >
          Learning in public — {thinkingIndexCopy.taglineLearning}
        </Link>
      </nav>
      {posts.length > 0 ? (
        <ul className="mt-8 space-y-0 list-none p-0">
          {posts.map((post) => (
            <li key={post.id} className="site-post-row">
              <Link
                to="/thinking/$slug"
                params={{ slug: post.slug } as { slug: string }}
                viewTransition
                className="site-inline-link font-semibold"
              >
                {post.title}
              </Link>
              {post.excerpt && (
                <p className="site-muted mt-1 line-clamp-2">{post.excerpt}</p>
              )}
              {post.published_at && (
                <time className="site-muted text-xs mt-1 block">
                  {new Date(post.published_at).toLocaleDateString()}
                </time>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="site-muted mt-8">{thinkingEmpty.index}</p>
      )}
    </PageLayout>
  )
}
