import Hero from '@components/Hero'
import What from '@components/What'
import Why from '@components/Why'
import Testimonials from '@components/Testimonials'
import Cta from '@components/Cta'

const page = () => {
  return (
    <div>
      <Hero />
      <What />
      <Why />
      <Testimonials />
      <Cta />
    </div>
  )
}

export default page