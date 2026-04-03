import { createFileRoute } from '@tanstack/react-router'
import { thinkingIndexCopy } from '@/data/marketing-pages'
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
    const description = post?.excerpt ?? thinkingIndexCopy.metaDescription
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
      <main className="site-page">
        <div className="site-pad-md">
          <p className="site-body">Post not found or Ghost is not configured.</p>
        </div>
      </main>
    )
  }
  return (
    <main className="site-page">
      <article className="site-panel site-pad-md" style={{ margin: '12px 0 0' }}>
        <div className="site-pad-md">
          <h1
            className="site-display"
            style={{ fontSize: 'clamp(24px, 4vw, 34px)' }}
          >
            {post.title}
          </h1>
          {post.published_at && (
            <time className="site-caption block mb-6">
              {new Date(post.published_at).toLocaleDateString()}
            </time>
          )}
          {post.excerpt && (
            <p className="site-body" style={{ fontSize: '15px' }}>
              {post.excerpt}
            </p>
          )}
          {post.html && (
            <div
              className="site-ghost-html"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          )}
        </div>
      </article>
    </main>
  )
}
