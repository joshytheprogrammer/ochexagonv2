import Jumbotron from '@components/Jumbotron'
import Who from '@components/Who'
import Choose from '@components/Choose'
import Team from '@components/Team'
import Clients from '@components/Clients'
import { aboutTestimonial } from '@constants'


const page = () => {
  return (
    <div>
      <Jumbotron content="About Us" url="https://res.cloudinary.com/dsgvwxygr/image/upload/v1693116985/ochexagon/photo_3_2023-08-27_07-07-22_ha12lj.jpg"/>

      <Who />
      <Choose />
      <Team />
      <Clients testimonials={aboutTestimonial}/>
    </div>
  )
}

export default page