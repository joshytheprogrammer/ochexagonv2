import Image from 'next/image'
import founder from '@assets/founder.jpg'
import founder2 from '@assets/founder2.png'
import founder3 from '@assets/founder3.png'
import founder4 from '@assets/founder4.png'

const Team = () => {
  return (
    <div className="lg:px-20 lg:py-12 md:px-16 px-8 pt-12" data-aos="zoom-in">
      <h1 className="font text-4xl md:text-[56px] font-semibold text-center md:mb-24 mb-16">Our Executive Team</h1>

      <div className="flex flex-col md:flex-row items-center lg:justify-between">
        <div className="w-full lg:w-[350px] mb-12 lg:mb-0 mx-3">
          <Image 
           src={founder}
           alt='founder image'
           className='w-full h-auto border-2 rounded-xl'
          />

          <h3 className='font font-bold text-2xl my-4 text-center'>Mr Clifford Onyeje</h3>
          <p className='font font-semibold text-lg text-center'>Founder/CEO</p>
        </div>
        <div className="w-full lg:w-[350px] mb-12 lg:mb-0 mx-3">
          <Image 
           src={founder2}
           alt='founder image'
           className='w-full h-[340px] border-2 rounded-xl'
          />

          <h3 className='font font-bold text-2xl my-4 text-center'> Mrs Stella Ngozi Onyeje</h3>
          <p className='font font-semibold text-lg text-center'>Executive Director</p>
        </div>
        <div className="w-full lg:w-[350px] mb-12 lg:mb-0 mx-3">
          <Image 
           src={founder4}
           alt='founder image'
           className='w-full h-[340px] border-2 rounded-xl'
          />

          <h3 h3 className='font font-bold text-2xl my-4 text-center'>Engr Ignatius Onyeje</h3>
          <p className='font font-semibold text-lg text-center'>Director</p>
        </div>

        <div className="w-full lg:w-[350px] mb-12 lg:mb-0 mx-3">
          <Image 
           src={founder3}
           alt='founder image'
           className='w-full h-[340px] border-2 rounded-xl'
          />

          <h3 h3 className='font font-bold text-2xl my-4 text-center'>Mrs Joy Amadi</h3>
          <p className='font font-semibold text-lg text-center'>Admin/Manager</p>
        </div>
        
        
      </div>
    </div>
  )
}

export default Team