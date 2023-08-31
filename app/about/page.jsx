import Jumbotron from '@components/Jumbotron'
import Who from '@components/Who'
import Choose from '@components/Choose'
import Team from '@components/Team'
import TeamTestimonials from '@components/TeamTestimonials'
import { aboutTestimonial } from '@constants'


const page = () => {
  return (
    <div>
      <Jumbotron content="About Us" url="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FyZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"/>

      <Who />
      <Choose />
      <Team />
      <TeamTestimonials/>
    </div>
  )
}

export default page