import Contact from '@components/contact'
import Map from '@components/Map'
import Jumbotron from '@components/Jumbotron'

const page = () => {


  return (
    <div>
      <Jumbotron content="Contact Us" url="https://img.freepik.com/free-vector/realistic-handset-concept_1284-34781.jpg?w=1060&t=st=1692787163~exp=1692787763~hmac=1b75ae699da3f6e934bfa47c7a09bc40a2c7c9a8f7465c40e6e395ed8c142e2d"/>
      <Contact />
      <Map/>
    </div>
  )
}

export default page