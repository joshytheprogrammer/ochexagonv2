import Image from 'next/image'
import founder from '@assets/founder.jpg'
import bulb from '@assets/bulb.svg'
import drop from '@assets/drop.svg'

const Team = () => {
  return (
    <div className="lg:px-24 md:px-16 px-8 py-12">
      <h1 className="font text-4xl md:text-[56px] font-semibold text-center md:mb-12 mb-6">Why Choose Us?</h1>

      <div className="flex flex-col md:flex-row items-center lg:justify-between">
        <div className="w-full lg:w-[350px] mb-8 lg:mb-0 mx-3">
          <Image 
           src={founder}
           alt='founder image'
           className='w-full h-[280px]'
          />

          <h3 className='font font-bold text-xl'>Igwe DC</h3>
          <p className='font font-semibold text-sm'>Founder/CEO</p>
        </div>
        <div className="w-full lg:w-[350px] mb-8 lg:mb-0 mx-3">
          <Image 
           src={founder}
           alt='founder image'
           className='w-full h-[280px]'
          />

          <h3 className='font font-bold text-xl'>Igwe DC</h3>
          <p className='font font-semibold text-sm'>Founder/CEO</p>
        </div>
        <div className="w-full lg:w-[350px] mb-8 lg:mb-0 mx-3">
          <Image 
           src={founder}
           alt='founder image'
           className='w-full h-[280px]'
          />

          <h3 className='font font-bold text-xl'>Igwe DC</h3>
          <p className='font font-semibold text-sm'>Founder/CEO</p>
        </div>

        
      </div>
    </div>
  )
}

export default Team