import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html className='dark'>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet" />
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