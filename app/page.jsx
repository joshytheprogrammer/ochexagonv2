import Hero from '@components/Hero'
import What from '@components/What'
import Why from '@components/Why'
import Product from '@components/Product'
import Testimonials from '@components/Testimonials'
import Cta from '@components/Cta'

import { homeTestimonials } from '@constants'

const page = () => {
  return (
    <div>
      <Hero />
      <What />
      <Why />
      <Product />
      <Testimonials testimonials={homeTestimonials}/>
      <Cta />
    </div>
  )
}

export default page