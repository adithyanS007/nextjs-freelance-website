import React from 'react';
import HomePage from '@/components/Home/Home';
import SEO from '@/components/Seo/Seo';

const Home = () => {
  return (
    <>
      <SEO
        title="Home - Companyname | World’s Leading Water Purification Technology"
        description="Discover premium water purification systems from Companyname. Clean, safe, and advanced filtering technology for every home and office."
        url="https://companydomain.in"
        canonical="https://companydomain.in"
      />
      <HomePage />
    </>
  );
};

export default Home;