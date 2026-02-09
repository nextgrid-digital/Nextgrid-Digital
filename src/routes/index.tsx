import { createFileRoute } from '@tanstack/react-router'
import { useMode } from '@/context/ModeContext'
import {
  hero,
  identity,
  theShift,
  whyOldModelsBreak,
  stance,
  howWeOperate,
  proof,
  distribution,
  learning,
  ventures,
  filter,
  bridge,
  invitation,
  testimonials,
  recentBlogPosts,
  proofImageCaption,
  venturesImageCaption,
} from '@/data/home-copy'
import { homeImages } from '@/data/home-images'
import { getHomepageMarkdown } from '@/data/home-markdown'
import {
  Button,
  Card,
  Section,
  Container,
  Heading,
  Text,
  AccentLink,
} from '@/components/ui'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [
      { title: 'Nextgrid Digital' },
      {
        name: 'description',
        content:
          'Nextgrid Digital – how we build, work, ventures, thinking, and principles.',
      },
    ],
  }),
})

function HomePage() {
  const { mode } = useMode()
  const m = mode

  if (mode === 'machine') {
    const markdown = getHomepageMarkdown()
    return (
      <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <div className="max-w-3xl mx-auto px-4 py-8">
          <pre
            className="overflow-x-auto whitespace-pre-wrap font-mono text-sm rounded-lg border p-6"
            style={{
              color: 'var(--text)',
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
            }}
          >
            <code>{markdown}</code>
          </pre>
        </div>
      </main>
    )
  }

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* 1. Hero */}
      <section className="px-4 py-20 sm:px-6 sm:py-28 overflow-visible">
        <Container maxWidth="4xl" className="grid-swiss text-left">
          <div className="col-span-12 min-w-0">
            <Heading
              level={1}
              className="break-words hyphens-none font-normal tracking-[-2.5px] md:mr-[-12vw] lg:mr-[-8vw]"
            >
              {hero[m].headline}
            </Heading>
          </div>
          <div className="col-span-12 md:col-span-8 max-w-3xl">
            <Text muted preLine className="text-base sm:text-lg md:text-xl mb-10 break-words max-w-2xl">
              {hero[m].subhead}
            </Text>
            <Button to="/work-with-us">{hero[m].cta}</Button>
          </div>
          <div className="col-span-12 mt-16">
            <img
              src={homeImages.hero.src}
              alt={homeImages.hero.alt}
              width={homeImages.hero.width}
              height={homeImages.hero.height}
              className="w-full rounded-lg border object-cover"
              style={{ borderColor: 'var(--border)' }}
            />
            {hero[m].caption && (
              <Text muted className="text-sm mt-3">
                {hero[m].caption}
              </Text>
            )}
          </div>
        </Container>
      </section>

      {/* 2. Identity */}
      <Section borderTop>
        <Container maxWidth="2xl" className="grid-swiss text-left">
          <div className="col-span-12 md:col-span-8 max-w-[65ch]">
            <Heading level={2} className="mb-4">
              {identity[m].title}
            </Heading>
            <Text muted preLine>{identity[m].body}</Text>
          </div>
        </Container>
      </Section>

      {/* 3. The Shift */}
      <Section borderTop>
        <Container maxWidth="2xl" className="grid-swiss text-left">
          <div className="col-span-12 md:col-span-8 max-w-[65ch]">
            <Heading level={2} className="mb-4">
              {theShift[m].title}
            </Heading>
            <Text muted preLine>{theShift[m].body}</Text>
          </div>
        </Container>
      </Section>

      {/* 4. Why old models break */}
      <Section borderTop>
        <Container maxWidth="2xl" className="grid-swiss text-left">
          <div className="col-span-12 md:col-span-8 max-w-[65ch]">
            <Heading level={2} className="mb-4">
              {whyOldModelsBreak[m].title}
            </Heading>
            <Text muted preLine>{whyOldModelsBreak[m].body}</Text>
          </div>
        </Container>
      </Section>

      {/* 5. Stance */}
      <Section borderTop>
        <Container maxWidth="2xl" className="grid-swiss text-left">
          <div className="col-span-12 md:col-span-8 max-w-[65ch]">
            <Heading level={2} className="mb-4">
              {stance[m].title}
            </Heading>
            <Text muted preLine>{stance[m].body}</Text>
          </div>
        </Container>
      </Section>

      {/* 6. How we operate */}
      <Section borderTop>
        <Container maxWidth="2xl" className="grid-swiss text-left">
          <div className="col-span-12 md:col-span-8 max-w-[65ch]">
            <Heading level={2} className="mb-4">
              {howWeOperate[m].title}
            </Heading>
            <Text muted preLine>{howWeOperate[m].body}</Text>
          </div>
        </Container>
      </Section>

      {/* 7. Proof */}
      <Section borderTop>
        <Container maxWidth="6xl" className="grid-swiss text-left">
          <div className="col-span-12 md:col-span-7 max-w-[65ch]">
            <Heading level={2} className="mb-4">
              {proof[m].title}
            </Heading>
            <Text muted preLine className="mb-4">
              {m === 'human' ? proof.human.body : proof.machine.body}
            </Text>
            {m === 'machine' && proof.machine.bullets && (
              <ul
                className="list-disc pl-6 mb-4 space-y-2"
                style={{ color: 'var(--text-muted)' }}
              >
                {proof.machine.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {m === 'machine' && proof.machine.bodyEnd && (
              <Text muted preLine className="mb-4">
                {proof.machine.bodyEnd}
              </Text>
            )}
            <AccentLink to="/work">Read more</AccentLink>
          </div>
          <div className="col-span-12 md:col-span-5">
            <img
              src={homeImages.proof.src}
              alt={homeImages.proof.alt}
              width={homeImages.proof.width}
              height={homeImages.proof.height}
              className="w-full rounded-lg border object-cover"
              style={{ borderColor: 'var(--border)' }}
            />
            <Text muted className="text-sm mt-2">
              {proofImageCaption[m]}
            </Text>
          </div>
        </Container>
      </Section>

      {/* How others are building */}
      <Section borderTop>
        <Container maxWidth="6xl" className="grid-swiss">
          <Heading level={2} className="col-span-12 mb-10 text-left">
            How others are building
          </Heading>
          {testimonials.map((t) => (
            <Card key={t.name} className="col-span-12 sm:col-span-4">
              <div
                className="w-12 h-12 rounded-full mb-4 flex items-center justify-center text-sm font-medium"
                style={{
                  backgroundColor: 'var(--border)',
                  color: 'var(--text-muted)',
                }}
              >
                {t.name.charAt(0)}
              </div>
              <Heading level={3} className="mb-1">
                {t.name}
              </Heading>
              <Text muted className="text-sm mb-4">
                {t.role}, {t.company}
              </Text>
              <Text muted className="text-sm">
                &ldquo;{t.quote}&rdquo;
              </Text>
            </Card>
          ))}
        </Container>
      </Section>

      {/* 8. Distribution */}
      <Section borderTop>
        <Container maxWidth="2xl" className="grid-swiss text-left">
          <div className="col-span-12 md:col-span-8 max-w-[65ch]">
            <Heading level={2} className="mb-4">
              {distribution[m].title}
            </Heading>
            <Text muted preLine>{distribution[m].body}</Text>
          </div>
        </Container>
      </Section>

      {/* 9. Learning */}
      <Section borderTop>
        <Container maxWidth="2xl" className="grid-swiss text-left">
          <div className="col-span-12 md:col-span-8 max-w-[65ch]">
            <Heading level={2} className="mb-4">
              {learning[m].title}
            </Heading>
            <Text muted preLine>{learning[m].body}</Text>
            <AccentLink to="/thinking" className="mt-4 block">
              Read more
            </AccentLink>
          </div>
        </Container>
      </Section>

      {/* 10. Ventures */}
      <Section borderTop>
        <Container maxWidth="6xl" className="grid-swiss text-left">
          <div className="col-span-12 md:col-span-7 max-w-[65ch]">
            <Heading level={2} className="mb-4">
              {ventures[m].title}
            </Heading>
            <Text muted preLine>{ventures[m].body}</Text>
            <AccentLink to="/ventures" className="mt-4 block">
              Read more
            </AccentLink>
          </div>
          <div className="col-span-12 md:col-span-5">
            <img
              src={homeImages.ventures.src}
              alt={homeImages.ventures.alt}
              width={homeImages.ventures.width}
              height={homeImages.ventures.height}
              className="w-full rounded-lg border object-cover"
              style={{ borderColor: 'var(--border)' }}
            />
            <Text muted className="text-sm mt-2">
              {venturesImageCaption[m]}
            </Text>
          </div>
        </Container>
      </Section>

      {/* Recent on the blog */}
      <Section borderTop>
        <Container maxWidth="6xl" className="grid-swiss">
          <Heading level={2} className="col-span-12 mb-10 text-left">
            Recent on the blog
          </Heading>
          {recentBlogPosts.map((post, i) => (
            <Card key={post.to} className="col-span-12 sm:col-span-4">
              <img
                src={homeImages.blogThumbs[i].src}
                alt={homeImages.blogThumbs[i].alt}
                className="w-full h-32 object-cover rounded mb-4"
                width={600}
                height={200}
              />
              <Heading level={3} className="mb-2">
                {post.title}
              </Heading>
              <Text muted className="text-sm mb-4">
                {post.excerpt}
              </Text>
              <AccentLink to={post.to}>Read more</AccentLink>
            </Card>
          ))}
        </Container>
      </Section>

      {/* 11. Filter */}
      <Section borderTop>
        <Container maxWidth="2xl" className="grid-swiss text-left">
          <div className="col-span-12 md:col-span-8 max-w-[65ch]">
            <Heading level={2} className="mb-4">
              {filter[m].title}
            </Heading>
            <Text muted preLine>{filter[m].body}</Text>
          </div>
        </Container>
      </Section>

      {/* Bridge */}
      <Section borderTop>
        <Container maxWidth="2xl" className="grid-swiss">
          <div className="col-span-12 md:col-span-7 max-w-[65ch]">
            <Text muted preLine>
              {bridge[m].body}
            </Text>
          </div>
        </Container>
      </Section>

      {/* 12. Invitation */}
      <Section borderTop>
        <Container maxWidth="2xl" className="grid-swiss text-left">
          <div className="col-span-12 md:col-span-7">
            <Heading level={2} className="mb-4">
              {invitation[m].title}
            </Heading>
            <Text muted preLine className="mb-8">
              {invitation[m].body}
            </Text>
            <Button to="/work-with-us">{invitation[m].cta}</Button>
          </div>
        </Container>
      </Section>
    </main>
  )
}
