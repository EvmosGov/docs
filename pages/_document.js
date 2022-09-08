import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html className='dark'>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet" />
        <meta name="msapplication-TileColor" content="#1d1f21" />
        <meta name="theme-color" content="#1d1f21" />
        <meta name="description" content="Evmos DAO Governance Documentation. In Interoperability We Trust." />
        <meta name="og:description" content="Evmos DAO Governance Documentation. In Interoperability We Trust." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://docs.evmos.vision/card.png" />
        <meta name="twitter:site:domain" content="docs.evmos.vision" />
        <meta name="twitter:url" content="https://docs.evmos.vision" />
        <meta name="og:title" content="Evmos DAO Governance Documentation. In Interoperability We Trust." />
        <meta name="og:image" content="https://docs.evmos.vision/card.png" />
        <meta property="og:image" content="https://docs.evmos.vision/card.png" />
        <meta name="apple-mobile-web-app-title" content="Evmos Docs" />
        <meta name="image" content="https://docs.evmos.vision/card.png" />
        <meta itemProp="image" content="https://docs.evmos.vision/card.png" />
        <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon.png"
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
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
        id="theme-darker"
        lang="javascript"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `if (!window.localStorage.getItem("theme_default")) {
            window.localStorage.setItem("theme", "dark");
            window.localStorage.setItem("theme_default", "dark");
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
          }`,
        }}
      />
      </body>
    </Html>
  )
}