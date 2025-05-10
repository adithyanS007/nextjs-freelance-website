import React from 'react';
import About from '@/components/About/About';
import SEO from '@/components/Seo/Seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About"
}

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us - Companyname | Trusted Water Purification Experts"
        description="Learn about Companyname, the global leader in water filtering and purifying technology. Discover our mission, values, and expertise."
        url="https://nextjs-freelance-website.vercel.app/about"
        canonical="https://nextjs-freelance-website.vercel.app/about"
      />
      <About />
    </>
  );
};

export default AboutPage;