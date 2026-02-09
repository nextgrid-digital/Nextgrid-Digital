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
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <Section>
        <Container maxWidth="4xl">
          <Heading level={1} className="mb-2">
            Styleguide
          </Heading>
          <Text muted className="mb-12">
            All site components and layouts. Changes here update the design system site-wide.
          </Text>

          {/* Typography */}
          <section className="mb-16">
            <Heading level={2} className="mb-6">
              Typography
            </Heading>
            <div className="space-y-4">
              <Heading level={1}>Heading 1</Heading>
              <Heading level={2}>Heading 2</Heading>
              <Heading level={3}>Heading 3</Heading>
              <Text>Default body text.</Text>
              <Text muted>Muted body text.</Text>
            </div>
          </section>

          {/* Button */}
          <section className="mb-16">
            <Heading level={2} className="mb-6">
              Button
            </Heading>
            <div className="flex flex-wrap gap-4">
              <Button to="/work-with-us">Primary (link)</Button>
              <Button variant="secondary">Secondary</Button>
              <Button onClick={() => {}}>Primary (button)</Button>
            </div>
          </section>

          {/* Card */}
          <section className="mb-16">
            <Heading level={2} className="mb-6">
              Card
            </Heading>
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
          </section>

          {/* AccentLink */}
          <section className="mb-16">
            <Heading level={2} className="mb-6">
              AccentLink
            </Heading>
            <AccentLink to="/thinking">Read more</AccentLink>
          </section>

          {/* Tabs */}
          <section className="mb-16">
            <Heading level={2} className="mb-6">
              Tabs
            </Heading>
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
          </section>

          {/* Section / Container */}
          <section className="mb-16">
            <Heading level={2} className="mb-6">
              Section & Container
            </Heading>
            <Section borderTop>
              <Container maxWidth="2xl">
                <Text>
                  A Section with border-top and a Container (max-w-2xl) with sample content.
                </Text>
              </Container>
            </Section>
          </section>
        </Container>
      </Section>
    </main>
  )
}
