const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
  forcedTheme: 'dark',
})
const { withAxiom } = require('next-axiom');
module.exports = withAxiom(withNextra({
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
  },
  experimental: {
    nextScriptWorkers: true,
  },
}))

