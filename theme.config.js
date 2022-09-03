 export default {
  projectLink: 'https://github.com/EvmosGov/docs',
  docsRepositoryBase: 'https://github.com/EvmosGov/docs/blob/main',
  github: 'https://github.com/EvmosGov',
  titleSuffix: ' – Evmos DAO',
  logo: (
    <>
      <img className="inline mr-2" src="/logo-round.svg" />
      <span className="mr-2 font-semibold text-lg hidden md:inline">Evmos DAO</span>
      <span className="text-gray-400 font-normal hidden md:inline">
       Governance Docs
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Evmos DAO Governance Documentation. In Interoperability We Trust." />
      <meta name="og:description" content="Evmos DAO Governance Documentation. In Interoperability We Trust." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://docs.evmos.vision/card.png" />
      <meta name="twitter:site:domain" content="docs.evmos.vision" />
      <meta name="twitter:url" content="https://docs.evmos.vision" />
      <meta name="og:title" content="Evmos DAO Governance Documentation. In Interoperability We Trust." />
      <meta name="og:image" content="https://docs.evmos.vision/card.png" />
      <meta property="og:image" content="https://docs.evmos.vision/card.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <meta name="image" content="https://docs.evmos.vision/card.png" />
      <meta itemProp="image" content="https://docs.evmos.vision/card.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet" />
      <script
        lang="javascript"
        dangerouslySetInnerHTML={{
          __html: `if (!window.localStorage.getItem("theme_default")) {
            window.localStorage.setItem("theme", "dark");
            window.localStorage.setItem("theme_default", "dark");
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
          }`,
        }}
      />;
    </>
    ),
  search: true,
  unstable_stork: true,
  prevLinks: true,
  nextLinks: true,
  darkMode: true,
  sidebarSubtitle: <>Hello</>,
  unstable_staticImage: true,
  footer: true,
  footerEditLink: 'View Changes on Github →',
  footerText: <>{new Date().getFullYear()} © Evmos DAO.</>,
  unstable_faviconGlyph: '🪐',
  feedbackLink: <>Give us feedback →</>,
  feedbackLabels: 'feedback',
  defaultTheme: "dark",
  forcedTheme: "dark",
  storageKey: "themec",
  nextThemes: {
    defaultTheme: "dark",
    forcedTheme: "dark",
    storageKey: "themec"
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'ko', text: '한국어' },
  ],
  banner:
  '🚧 This is a work-in-progress docs for Nextra 2.0, content may be incomplete or inaccurate.',
}
