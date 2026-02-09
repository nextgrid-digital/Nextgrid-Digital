import { createFileRoute, Link } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'
import { getGhostPostsByTag } from '@/lib/ghost'

export const Route = createFileRoute('/thinking/learning-in-public')({
  component: LearningInPublicPage,
  loader: async () => {
    const posts = await getGhostPostsByTag('learning-in-public', 20)
    return { posts }
  },
  head: () => ({
    meta: [
      { title: 'Learning in Public | Thinking | Nextgrid Digital' },
      {
        name: 'description',
        content: 'Posts on learning in public and sharing the process.',
      },
    ],
  }),
})

function LearningInPublicPage() {
  const { posts } = Route.useLoaderData()
  return (
    <PageLayout
      title="Learning in Public"
      description="Learning in public and sharing the process."
    >
      {posts.length > 0 ? (
        <ul className="mt-6 space-y-4">
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
                <p className="text-muted text-sm mt-1 line-clamp-2">{post.excerpt}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">
          Posts tagged Learning in Public will appear here when Ghost is configured.
        </p>
      )}
    </PageLayout>
  )
}
