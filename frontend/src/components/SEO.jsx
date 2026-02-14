import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useBrand } from '../context/BrandContext';

export const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage
}) => {
  const brand = useBrand();

  // Use brand defaults if props not provided
  const pageTitle = title || `${brand.appName} - AI-Powered Scam Call Protection`;
  const pageDescription = description || brand.seo.description;
  const pageKeywords = keywords || brand.seo.keywords;
  const pageCanonical = canonical || `https://${brand.domain}`;
  const pageOgImage = ogImage || `https://${brand.domain}/og-image.jpg`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <link rel="canonical" href={pageCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:image" content={pageOgImage} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageOgImage} />
    </Helmet>
  );
};
