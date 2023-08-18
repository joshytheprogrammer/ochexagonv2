import Image from 'next/image'
import chemicals from '@assets/chemicals.jpg'

const Who = () => {
  return (
    <div className='lg:px-24 md:px-16 px-8 py-4 flex flex-col lg:flex-row justify-between items-center '>
        <div className='w-full lg:w-2/4 mb-8 lg:mb-0 mr-8'>
            <Image 
            src={chemicals}
            alt='chemicals'
            className='w-full'
            />
        </div>

        <div className='lg:w-2/4'>
            <h2 className='font sm:text-5xl text-4xl font-semibold mb-3 lg:mb-8'>Who we are</h2>
            <p className='font text-lg '>
              Welcome to OCHEXAGON! With a legacy of innovation, we're a trusted provider of industrial chemicals globally. Our expert team drives us to create tailored solutions, while our commitment to sustainability ensures progress goes hand in hand with environmental care. At OCHEXAGON, we're not just meeting industry standards – we're setting new ones through excellence, innovation, and enduring partnerships. Join us and be a part of shaping a impactful chemical-powered future.
            </p>
        </div>
      </div>
  )
}

export default Who