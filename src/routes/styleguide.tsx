import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  Button,
  Card,
  Section,
  Container,
  Heading,
  Text,
  AccentLink,
  Tabs,
  TabsPanel,
} from '@/components/ui'

export const Route = createFileRoute('/styleguide')({
  component: StyleguidePage,
  head: () => ({
    meta: [
      { title: 'Styleguide | Nextgrid Digital' },
      {
        name: 'description',
        content: 'Design system and component showcase for Nextgrid Digital.',
      },
    ],
  }),
})

function StyleguidePage() {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <main className="site-page">
      <div className="site-panel site-pad-md" style={{ marginTop: 12 }}>
        <h1 className="site-h1">Styleguide</h1>
        <p className="site-body mb-10">
          Live chrome uses theme tokens (light/dark) and Geist. Legacy UI primitives
          below remain for component testing.
        </p>

        <div className="site-demo-block mb-8">
          <div className="site-pad-md">
            <h2 className="site-h2" style={{ fontSize: '1.15rem' }}>
              Typography (marketing / site)
            </h2>
            <p className="site-body">Body — execution studio, systems-first copy.</p>
            <p className="site-caption">Caption / secondary line</p>
          </div>
        </div>

        <div className="site-demo-block mb-8">
          <div className="site-pad-md">
            <h2 className="site-h2" style={{ fontSize: '1.15rem' }}>
              Typography (legacy UI)
            </h2>
            <div className="space-y-4">
              <Heading level={1}>Heading 1</Heading>
              <Heading level={2}>Heading 2</Heading>
              <Heading level={3}>Heading 3</Heading>
              <Text>Default body text.</Text>
              <Text muted>Muted body text.</Text>
            </div>
          </div>
        </div>

        <div className="site-demo-block mb-8">
          <div className="site-pad-md">
            <h2 className="site-h2" style={{ fontSize: '1.15rem' }}>
              Button
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button to="/work-with-us">Primary (link)</Button>
              <Button variant="secondary">Secondary</Button>
              <Button onClick={() => {}}>Primary (button)</Button>
            </div>
          </div>
        </div>

        <div className="site-demo-block mb-8">
          <div className="site-pad-md">
            <h2 className="site-h2" style={{ fontSize: '1.15rem' }}>
              Card
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <Heading level={3} className="mb-2">
                  Testimonial card
                </Heading>
                <Text muted className="mb-4">
                  Quote or testimonial text goes here.
                </Text>
                <Text className="text-sm">Name, Role</Text>
              </Card>
              <Card>
                <Heading level={3} className="mb-2">
                  Blog card
                </Heading>
                <Text muted className="mb-4">
                  Short excerpt or description.
                </Text>
                <AccentLink to="/thinking">Read more</AccentLink>
              </Card>
              <Card>
                <Heading level={3} className="mb-2">
                  Generic card
                </Heading>
                <Text muted>Any card content.</Text>
              </Card>
            </div>
          </div>
        </div>

        <div className="site-demo-block mb-8">
          <div className="site-pad-md">
            <h2 className="site-h2" style={{ fontSize: '1.15rem' }}>
              AccentLink
            </h2>
            <AccentLink to="/thinking">Read more</AccentLink>
          </div>
        </div>

        <div className="site-demo-block mb-8">
          <div className="site-pad-md">
            <h2 className="site-h2" style={{ fontSize: '1.15rem' }}>
              Tabs
            </h2>
            <Tabs
              tabs={[
                { label: 'Tab one' },
                { label: 'Tab two' },
                { label: 'Tab three' },
              ]}
              selectedIndex={tabIndex}
              onSelect={setTabIndex}
              className="mb-4"
            />
            <TabsPanel hidden={tabIndex !== 0}>
              <Text muted>Content for tab one.</Text>
            </TabsPanel>
            <TabsPanel hidden={tabIndex !== 1}>
              <Text muted>Content for tab two.</Text>
            </TabsPanel>
            <TabsPanel hidden={tabIndex !== 2}>
              <Text muted>Content for tab three.</Text>
            </TabsPanel>
          </div>
        </div>

        <div className="site-demo-block mb-8">
          <div className="site-pad-md">
            <h2 className="site-h2" style={{ fontSize: '1.15rem' }}>
              Section & Container
            </h2>
            <Section borderTop>
              <Container maxWidth="2xl">
                <Text>
                  A Section with border-top and a Container (max-w-2xl) with sample
                  content.
                </Text>
              </Container>
            </Section>
          </div>
        </div>
      </div>
    </main>
  )
}
