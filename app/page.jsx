import Hero from '@components/Hero'
import What from '@components/What'
import Why from '@components/Why'
import Testimonials from '@components/Testimonials'
import Cta from '@components/Cta'

import { homeTestimonials } from '@constants'

const page = () => {
  return (
    <div>
      <Hero />
      <What />
      <Why />
      <Testimonials testimonials={homeTestimonials}/>
      <Cta />
    </div>
  )
}

export default page