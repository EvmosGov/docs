const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
  forcedTheme: 'dark',

})
module.exports = withNextra({
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
  }
})
