import React from 'react';
import ProductsSlider from '@/components/Home/ProductsSlider/ProductsSlider';
import TestimonialsPage from '@/components/TestimonialsPage/TestimonialsPage';
import ContactUs from '@/components/Home/ContactUs/ContactUs';
import SEO from '@/components/Seo/Seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Testimonials"
}

const TestimonialPage = () => {
  return (
    <>
      <SEO
        title="Testimonials - Companyname | Real Reviews from Happy Customers"
        description="Read what our customers have to say about Companyname’s innovative and reliable water purification systems."
        url="https://nextjs-freelance-website.vercel.app/testimonials"
        canonical="https://nextjs-freelance-website.vercel.app/testimonials"
      />
      <TestimonialsPage />
      <ProductsSlider />
      <ContactUs />
    </>
  );
};

export default TestimonialPage;