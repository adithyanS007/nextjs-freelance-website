import React from 'react'
import CompanyOverview from './CompanyOverview/CompanyOverview'
import Testimonials from '../Home/Testimonials/Testimonials'
import ContactUs from '../Home/ContactUs/ContactUs'
import ProductsSlider from '../Home/ProductsSlider/ProductsSlider'

const About = () => {
  return (
    <div className='overflow-x-hidden'>
      <CompanyOverview />
      <Testimonials />
      <ContactUs />
      <ProductsSlider />
    </div>
  )
}

export default About
