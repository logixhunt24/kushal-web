// src/components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * SEO component to set meta tags dynamically.
 * Props:
 *   title       – Page title (string)
 *   description – Meta description (string)
 *   keywords    – Comma‑separated keywords (string)
 *   canonical   – Canonical URL (string)
 *   image       – Open Graph/Twitter image URL (string)
 *   url         – OG:url (string, usually same as canonical)
 */
const SEO = ({
  title = "",
  description = "",
  keywords = "",
  canonical = "",
  image = "",
  url = "",
}) => (
  <Helmet>
    {title && <title>{title}</title>}
    {description && <meta name="description" content={description} />}
    {keywords && <meta name="keywords" content={keywords} />}
    {canonical && <link rel="canonical" href={canonical} />}
    {/* Robots – allow all by default */}
    <meta name="robots" content="index,follow" />
    {/* Open Graph */}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {url && <meta property="og:url" content={url} />}
    {image && <meta property="og:image" content={image} />}
    <meta property="og:type" content="website" />
    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    {title && <meta name="twitter:title" content={title} />}
    {description && <meta name="twitter:description" content={description} />}
    {image && <meta name="twitter:image" content={image} />}
  </Helmet>
);

export default SEO;
