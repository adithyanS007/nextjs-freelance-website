import GetToKnowUs from './GetToKnowUs/GetToKnowUs'
import { GetToKnowUsData, GetToKnowUsData2 } from '@/constants/ConstData'
import WhatSetsUsApart from './WhatSetsUsApart/WhatSetsUsApart'
import NumberCounter from './NumberCounter/NumberCounter'
import Testimonials from './Testimonials/Testimonials'
import ContactUs from './ContactUs/ContactUs'
import Header from './Header/Header'
import ProductsSlider from './ProductsSlider/ProductsSlider'

const HomePage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <NumberCounter />
      <GetToKnowUs {...GetToKnowUsData}/>
      <GetToKnowUs {...GetToKnowUsData2} reverse={true}/>
      <WhatSetsUsApart />
      <Testimonials />
      <ProductsSlider />
      <ContactUs />
    </div>
  )
}

export default HomePage
