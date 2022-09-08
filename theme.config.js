import Head from 'next/head'
import Script from 'next/script'

 export default {
  projectLink: 'https://github.com/EvmosGov/docs',
  docsRepositoryBase: 'https://github.com/EvmosGov/docs/blob/main',
  github: 'https://github.com/EvmosGov',
  titleSuffix: ' – Governance Docs',
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

    </>
    ),
  search: true,
  unstable_stork: false,
  prevLinks: true,
  nextLinks: true,
  darkMode: true,
  floatTOC: true,
  unstable_staticImage: true,
  footer: true,
  font: false,
  footerEditLink: 'View Changes on Github →',
  footerText: <><span className="text-gray-200">Maintained by Governance, Evmos DAO</span></>,
  feedbackLink: <>Give us feedback →</>,
  feedbackLabels: 'feedback',
  defaultTheme: "dark",
  forcedTheme: "dark",
  storageKey: "theme",
  defaultMenuCollapsed: false,
  nextThemes: {
    defaultTheme: "dark",
    forcedTheme: "dark",
    storageKey: "theme"
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'ko', text: '한국어' },
  ]
}
