import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords = "water purifier, water filter, clean water, RO systems, Companyname, Best water purifier",
  url = "https://companyname.in",
  image = "https://companyname.in/images/og-image.jpg",
  canonical,
}: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Companyname - The Water Experts" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  );
};

export default SEO;
