import { createFileRoute, Link } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'
import { getGhostPostsByTag } from '@/lib/ghost'

export const Route = createFileRoute('/thinking/execution')({
  component: ExecutionPage,
  loader: async () => {
    const posts = await getGhostPostsByTag('execution', 20)
    return { posts }
  },
  head: () => ({
    meta: [
      { title: 'Execution | Thinking | Nextgrid Digital' },
      {
        name: 'description',
        content: 'Posts on execution and getting things done.',
      },
    ],
  }),
})

function ExecutionPage() {
  const { posts } = Route.useLoaderData()
  return (
    <PageLayout
      title="Execution"
      description="Thoughts on execution and getting things done."
    >
      {posts.length > 0 ? (
        <ul className="mt-6 space-y-0 list-none p-0">
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
            </li>
          ))}
        </ul>
      ) : (
        <p className="site-muted">
          Posts tagged Execution will appear here when Ghost is configured.
        </p>
      )}
    </PageLayout>
  )
}
