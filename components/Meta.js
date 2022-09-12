import Head from 'next/head';

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='keywords'
        content='react native, blog, John Doe, tutorial, react navigation'
      />
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
    </Head>
  );
};

export default Meta;

// let's set a default title
Meta.defaultProps = {
  title: 'Evmos DAO Governance Documentation - In Interoperability We Trust.',
};