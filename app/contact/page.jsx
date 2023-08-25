import Contact from '@components/Contact'
import Map from '@components/Map'
import Jumbotron from '@components/Jumbotron'

const page = () => {


  return (
    <div>
      <Jumbotron content="Contact Us" url="https://jgu.edu.in/wp-content/uploads/2021/06/contact_banner_short.jpg"/>
      <Contact />
      <Map/>
    </div>
  )
}

export default page