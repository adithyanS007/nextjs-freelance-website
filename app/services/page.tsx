import React from 'react';
import Services from '@/components/Services/Services';
import ProductsSlider from '@/components/Home/ProductsSlider/ProductsSlider';
import ContactUs from '@/components/Home/ContactUs/ContactUs';
import SEO from '@/components/Seo/Seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services"
}

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Services - Companyname | Comprehensive Water Purification Support"
        description="Discover the wide range of services offered by Companyname including installation, maintenance, and customer support for all water purification systems."
        url="https://companydomain.in/services"
        canonical="https://companydomain.in/services"
      />
      <Services />
      <ProductsSlider />
      <ContactUs />
    </>
  );
};

export default ServicesPage;