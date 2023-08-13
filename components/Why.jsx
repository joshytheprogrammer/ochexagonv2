import Image from 'next/image'
import one from '@assets/one.svg'
import two from '@assets/two.svg'
import three from '@assets/three.svg'
import four from '@assets/four.svg'
import whatImg from '@assets/whatImg.png'

const Why = () => {
  return (
    <div className="xl:px-[325px] xl:py-8 lg:px-16 md:px-20 px-8 py-4">
      <h1 className="font sm:text-6xl text-4xl lg:text-center font-semibold lg:mb-20 mb-8">Why People Choose Us</h1>

      <div className='flex '>
      <div className="relative">
          <div className="flex mb-6">
            <Image 
             alt="one"
             src={one}
             className="sm:w-[90px] w-16 h-auto"
            />

            <div className="ml-4">
              <h3 className='font font-semibold sm:text-2xl text-xl'>Innovation</h3>
              <p className='font sm:text-lg text-md'>Cutting-edge solution for optimal efficiency</p>
            </div>
          </div>
          <div className="flex mb-6">
            <Image 
             alt="two"
             src={two}
             className="sm:w-[100px] w-16 h-auto"
            />

            <div className="ml-4">
              <h3 className='font font-semibold sm:text-2xl text-xl'>Service</h3>
              <p className='font sm:text-lg text-md'>“Can do” attitude, exceeding expectations.</p>
            </div>
          </div>
          <div className="flex mb-6">
            <Image 
             alt="three"
             src={three}
             className="sm:w-[100px] w-16 h-auto"
            />

            <div className="ml-4">
              <h3 className='font font-semibold sm:text-2xl text-xl'>Expertise</h3>
              <p className='font sm:text-lg text-md'>Decades of industry knowledge for tailored solutions.</p>
            </div>
          </div>
          <div className="flex mb-6">
            <Image 
             alt="four"
             src={four}
             className="sm:w-[100px] w-16 h-auto"
            />

            <div className="ml-4">
              <h3 className='font font-semibold sm:text-2xl text-xl'>Sustainability</h3>
              <p className='font sm:text-lg text-md'>Environmental care through effective cleanup.</p>
            </div>
          </div>

          <Image 
           src={whatImg}
           alt='whatImg'
           className="w-[800px] absolute -top-[70px] left-[330px] hidden lg:block"
          />   
      </div>   
      </div>  
    </div>
  )
}

export default Why