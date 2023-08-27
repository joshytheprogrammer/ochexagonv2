import Image from 'next/image'
import founder from '@assets/founder.jpg'

const Team = () => {
  return (
    <div className="lg:px-20 lg:py-12 md:px-16 px-8 pt-12">
      <h1 className="font text-4xl md:text-[56px] font-semibold text-center md:mb-24 mb-16">Our Team Members</h1>

      <div className="flex flex-col md:flex-row items-center lg:justify-between">
        <div className="w-full lg:w-[350px] mb-12 lg:mb-0 mx-3">
          <Image 
           src={founder}
           alt='founder image'
           className='w-full h-auto border-2 rounded-xl'
          />

          <h3 className='font font-bold text-2xl my-4 text-center'>Igwe DC</h3>
          <p className='font font-semibold text-lg text-center'>Founder/CEO</p>
        </div>
        <div className="w-full lg:w-[350px] mb-12 lg:mb-0 mx-3">
          <Image 
           src={founder}
           alt='founder image'
           className='w-full h-auto border-2 rounded-xl'
          />

          <h3 className='font font-bold text-2xl my-4 text-center'>Igwe DC</h3>
          <p className='font font-semibold text-lg text-center'>Founder/CEO</p>
        </div>
        <div className="w-full lg:w-[350px] mb-12 lg:mb-0 mx-3">
          <Image 
           src={founder}
           alt='founder image'
           className='w-full h-auto border-2 rounded-xl'
          />

          <h3 h3 className='font font-bold text-2xl my-4 text-center'>Igwe DC</h3>
          <p className='font font-semibold text-lg text-center'>Founder/CEO</p>
        </div>
        
        
      </div>
    </div>
  )
}

export default Team