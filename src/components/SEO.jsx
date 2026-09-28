import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/siteData';

export default function SEO({ title, description, canonical, ogImage, article = false }) {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.seo.metaTitle;
  const metaDesc = description || siteConfig.seo.metaDescription;
  const image = ogImage || siteConfig.seo.ogImage;
  const url = canonical ? `${siteConfig.seo.siteUrl}${canonical}` : siteConfig.seo.siteUrl;

  // Educational Organization Schema Markup
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": siteConfig.name,
    "description": siteConfig.seo.metaDescription,
    "url": siteConfig.seo.siteUrl,
    "logo": `${siteConfig.seo.siteUrl}/logo.png`,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.branches[0].address,
      "addressLocality": "Mandya",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "sameAs": [
      siteConfig.socialLinks.facebook,
      siteConfig.socialLinks.instagram,
      siteConfig.socialLinks.youtube
    ],
    "subOrganization": siteConfig.branches.map(b => ({
      "@type": "School",
      "name": b.name,
      "address": b.address,
      "telephone": b.phone
    }))
  };

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={siteConfig.seo.keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
