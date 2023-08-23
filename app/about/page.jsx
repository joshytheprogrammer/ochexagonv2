import Jumbotron from '@components/Jumbotron'
import Who from '@components/Who'
import Choose from '@components/Choose'
import Team from '@components/Team'
import Clients from '@components/Clients'
import { aboutTestimonial } from '@constants'


const page = () => {
  return (
    <div>
      <Jumbotron content="About Us" url="https://img.freepik.com/free-photo/interior-new-warehouse_1385-442.jpg?w=1060&t=st=1692615065~exp=1692615665~hmac=3329115441d61873016945157642cec65d678ada9b01600ad4dda88390d3e607"/>

      <Who />
      <Choose />
      <Team />
      <Clients testimonials={aboutTestimonial}/>
    </div>
  )
}

export default page