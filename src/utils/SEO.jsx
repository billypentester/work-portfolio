import { Helmet, HelmetProvider } from 'react-helmet-async';
import config from "../settings/config"

const SEO = () => {
  return (
    <HelmetProvider>
    <Helmet>
        <meta charSet="utf-8" />
        <title>{config.seo.title}</title>
        <meta name="language" content="English" />
        <meta name="description" content={config.seo.description} />
        <link rel="canonical" href={config.seo.siteUrl} />
        <meta name="robots" content={config.seo.robots} />
        <meta name="keywords" content={config.seo.keywords} />
        <meta name="author" content={config.seo.author} />
        <meta name="viewport" content={config.seo.viewport} />
        <meta property="og:type" content={config.seo.og.type} />
        <meta property="og:title" content={config.seo.og.title} />
        <meta property="og:description" content={config.seo.og.description} />
        <meta property="og:image" content={config.seo.og.image} />
        <meta property="og:url" content={config.seo.og.url} />
    </Helmet>
    </HelmetProvider>
  )
}

export default SEO
