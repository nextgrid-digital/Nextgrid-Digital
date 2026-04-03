import { Link, createFileRoute } from '@tanstack/react-router'
import { MarketingSections } from '@/components/MarketingSections'
import { PageLayout } from '@/components/PageLayout'
import { howWeBuildPage, howWeBuildStepCards } from '@/data/marketing-pages'

export const Route = createFileRoute('/how-we-build')({
  component: HowWeBuildPage,
  head: () => ({
    meta: [
      { title: 'How We Build | Nextgrid Digital' },
      {
        name: 'description',
        content: howWeBuildPage.meta.description,
      },
    ],
  }),
})

function HowWeBuildPage() {
  const { meta, sections } = howWeBuildPage
  const beforeLoops = sections.filter((s) => s.id !== 'loops' && s.id !== 'artifacts' && s.id !== 'system')
  const loops = sections.find((s) => s.id === 'loops')!
  const afterLoops = sections.filter((s) => s.id === 'artifacts' || s.id === 'system')

  return (
    <PageLayout title="How We Build" description={meta.intro}>
      <MarketingSections sections={beforeLoops} classNameFirstSection="mt-6" />
      <section id={loops.id} className="mt-12">
        <h2 className="site-step-title">{loops.title}</h2>
        {loops.paragraphs?.map((p, i) => (
          <p key={i} className="site-card-text mt-4">
            {p}
          </p>
        ))}
        <div className="site-step-row mt-6">
          {howWeBuildStepCards.map((step, i) => (
            <div key={step.title} className="site-fragment-card">
              <div className="site-step-num">{i + 1}</div>
              <h3 className="site-step-title">{step.title}</h3>
              <p className="site-step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </section>
      <MarketingSections sections={afterLoops} />
      <p className="site-card-text mt-6">
        <Link to="/work-with-us" viewTransition className="site-inline-link">
          Explore work models
        </Link>
        .
      </p>
    </PageLayout>
  )
}
