import { createFileRoute } from '@tanstack/react-router'
import { MarketingSections } from '@/components/MarketingSections'
import { PageLayout } from '@/components/PageLayout'
import { principlesPage } from '@/data/marketing-pages'

export const Route = createFileRoute('/principles')({
  component: PrinciplesPage,
  head: () => ({
    meta: [
      { title: 'Principles | Nextgrid Digital' },
      {
        name: 'description',
        content: principlesPage.meta.description,
      },
    ],
  }),
})

function PrinciplesPage() {
  const { meta, sections } = principlesPage
  return (
    <PageLayout title="Principles" description={meta.intro}>
      <MarketingSections sections={sections} classNameFirstSection="mt-6" />
    </PageLayout>
  )
}
