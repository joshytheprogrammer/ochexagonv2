import Image from 'next/image'
import founder from '@assets/founder.jpg'

const Team = () => {
  return (
    <div className="lg:px-24 md:px-16 px-8 py-12">
      <h1 className="font text-4xl md:text-[56px] font-semibold text-center md:mb-20 mb-6">Our Team Members</h1>

      <div className="flex flex-col md:flex-row items-center lg:justify-between">
        <div className="w-full lg:w-[350px] mb-8 lg:mb-0 mx-3">
          <Image 
           src={founder}
           alt='founder image'
           className='w-full h-auto'
          />

          <h3 className='font font-bold text-xl mt-4'>Igwe DC</h3>
          <p className='font font-semibold text-sm'>Founder/CEO</p>
        </div>
        <div className="w-full lg:w-[350px] mb-8 lg:mb-0 mx-3">
          <Image 
           src={founder}
           alt='founder image'
           className='w-full h-auto'
          />

          <h3 className='font font-bold text-xl mt-4'>Igwe DC</h3>
          <p className='font font-semibold text-sm'>Founder/CEO</p>
        </div>
        <div className="w-full lg:w-[350px]  lg:mb-0 mx-3">
          <Image 
           src={founder}
           alt='founder image'
           className='w-full h-auto'
          />

          <h3 className='font font-bold text-xl mt-4'>Igwe DC</h3>
          <p className='font font-semibold text-sm'>Founder/CEO</p>
        </div>

        
      </div>
    </div>
  )
}

export default Team