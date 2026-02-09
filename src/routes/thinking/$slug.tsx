import { createFileRoute } from '@tanstack/react-router'
import { getGhostPostBySlug } from '@/lib/ghost'

export const Route = createFileRoute('/thinking/$slug')({
  component: ThinkingPostPage,
  loader: async ({ params }) => {
    const post = await getGhostPostBySlug(params.slug)
    return { post }
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post
    const title = post ? `${post.title} | Thinking | Nextgrid Digital` : 'Thinking | Nextgrid Digital'
    const description = post?.excerpt ?? 'Post from Nextgrid Digital.'
    const meta: Array<{ title?: string; name?: string; property?: string; content?: string }> = [
      { title },
      { name: 'description', content: description },
    ]
    if (post) {
      meta.push(
        { property: 'og:title', content: post.title },
        { property: 'og:description', content: description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: post.title },
        { name: 'twitter:description', content: description }
      )
      if (post.feature_image) {
        meta.push(
          { property: 'og:image', content: post.feature_image },
          { name: 'twitter:image', content: post.feature_image }
        )
      }
    }
    return { meta }
  },
})

function ThinkingPostPage() {
  const { post } = Route.useLoaderData()
  if (!post) {
    return (
      <main
        className="min-h-screen py-16 px-6"
        style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-muted">Post not found or Ghost is not configured.</p>
        </div>
      </main>
    )
  }
  return (
    <main
      className="min-h-screen py-16 px-6"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
    >
      <article className="max-w-4xl mx-auto">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ color: 'var(--text)' }}
        >
          {post.title}
        </h1>
        {post.published_at && (
          <time className="text-muted text-sm block mb-6">
            {new Date(post.published_at).toLocaleDateString()}
          </time>
        )}
        {post.excerpt && (
          <p className="text-lg text-muted mb-8">{post.excerpt}</p>
        )}
        {post.html && (
          <div
            className="prose prose-lg max-w-none"
            style={{ color: 'var(--text)' }}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        )}
      </article>
    </main>
  )
}
