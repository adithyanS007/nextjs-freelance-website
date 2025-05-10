import React from 'react';
import Contact from '@/components/Contact/Contact';
import SEO from '@/components/Seo/Seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact"
}

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Us - Companyname | Reach Out for Clean Water Solutions"
        description="Contact Companyname for all your water purification needs. Our experts are here to help you find the perfect solution."
        url="https://companydomain.in/contact"
        canonical="https://companydomain.in/contact"
      />
      <Contact />
    </>
  );
};

export default ContactPage;