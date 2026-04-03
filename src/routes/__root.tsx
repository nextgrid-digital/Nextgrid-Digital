import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import { ThemeProvider } from '@/context/ThemeContext'
import { ModeProvider } from '@/context/ModeContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingModeTab from '@/components/FloatingModeTab'

import appCss from '@/styles.css?url'

const defaultSiteUrl = typeof process !== 'undefined' && process.env?.SITE_URL
  ? process.env.SITE_URL
  : 'https://nextgrid.com'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Nextgrid Digital' },
      { name: 'description', content: 'Nextgrid Digital – how we build, work, ventures, thinking, and principles.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Nextgrid Digital' },
      { property: 'og:url', content: defaultSiteUrl },
      { property: 'og:title', content: 'Nextgrid Digital' },
      { property: 'og:description', content: 'Nextgrid Digital – how we build, work, ventures, thinking, and principles.' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Nextgrid Digital' },
      { name: 'twitter:description', content: 'Nextgrid Digital – how we build, work, ventures, thinking, and principles.' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var r=document.documentElement;r.classList.remove('theme-light','theme-dark');var t=localStorage.getItem('nextgrid-theme');if(t==='dark'||t==='light')r.classList.add('theme-'+t);else if(window.matchMedia('(prefers-color-scheme: dark)').matches)r.classList.add('theme-dark');else r.classList.add('theme-light');})();`,
          }}
        />
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Nextgrid Digital',
              url: defaultSiteUrl,
              description: 'Nextgrid Digital – how we build, work, ventures, thinking, and principles.',
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <ModeProvider>
            <Header />
            <div className="flex flex-1 flex-col">{children}</div>
            <Footer />
            <FloatingModeTab />
          </ModeProvider>
        </ThemeProvider>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
