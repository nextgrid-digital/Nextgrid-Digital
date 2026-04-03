import { Link, createFileRoute } from '@tanstack/react-router'
import { MarketingSections } from '@/components/MarketingSections'
import { PageLayout } from '@/components/PageLayout'
import {
  workWithUsFit,
  workWithUsModelCards,
  workWithUsPage,
} from '@/data/marketing-pages'

export const Route = createFileRoute('/work-with-us')({
  component: WorkWithUsPage,
  head: () => ({
    meta: [
      { title: 'Work With Us | Nextgrid Digital' },
      {
        name: 'description',
        content: workWithUsPage.meta.description,
      },
    ],
  }),
})

function WorkWithUsPage() {
  const { meta, sections } = workWithUsPage
  const philosophy = sections.find((s) => s.id === 'philosophy')!
  const modelsMeta = sections.find((s) => s.id === 'models')!
  const fitMeta = sections.find((s) => s.id === 'fit')!
  const startNext = sections.filter((s) => s.id === 'start' || s.id === 'next')

  return (
    <PageLayout title="Work With Us" description={meta.intro}>
      <MarketingSections sections={[philosophy]} classNameFirstSection="mt-6" />
      <section id={modelsMeta.id} className="mt-12">
        <h2 className="site-step-title">{modelsMeta.title}</h2>
        {modelsMeta.paragraphs?.map((p, i) => (
          <p key={i} className="site-card-text mt-4">
            {p}
          </p>
        ))}
        <div className="site-grid-3 mt-4">
          {workWithUsModelCards.map((m) => (
            <article key={m.title} className="site-card">
              <h3 className="site-step-title">{m.title}</h3>
              <p className="site-step-text">{m.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section id={fitMeta.id} className="mt-12">
        <h2 className="site-step-title">{fitMeta.title}</h2>
        {fitMeta.paragraphs?.map((p, i) => (
          <p key={i} className="site-card-text mt-4">
            {p}
          </p>
        ))}
        <div className="site-proof-grid mt-4">
          <div className="site-fit-box">
            <h3>Strong fit</h3>
            <ul>
              {workWithUsFit.good.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="site-fit-box">
            <h3>Poor fit</h3>
            <ul>
              {workWithUsFit.bad.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <MarketingSections sections={startNext} />
      <p className="site-card-text mt-6">
        Ready to start?{' '}
        <Link to="/contact" viewTransition className="site-inline-link">
          Contact us with your scope
        </Link>
        .
      </p>
    </PageLayout>
  )
}
