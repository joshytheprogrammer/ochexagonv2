import Link from 'next/link'
import Image from 'next/image'
import heroImg from '@assets/heroImg.png'
import arrow from '@assets/arrow.svg'

const Hero = () => {
  return (
    <div className="lg:px-24 md:px-16 px-8 py-8 flex lg:flex-row flex-col justify-between items-center">
      <div className="md:max-w-[800px] w-full">
        <h1 className='font xl:text-[56px] lg:text-[42px] md:text-[56px] text-[30px] font-extrabold sm:leading-[72px] lg:mb-4 md:mb-4 mb-3'>
          Empowering Industries with Innovative Chemical Solutions
        </h1>

        <Link href='/contact' className='sm:block hidden w-[260px]'>
          <button className='contactBtn'>
            <span className="text font text-xl">Contact Us</span>
            <div className="icon-container">
              <div className="icon icon--left">
                  <Image 
                  src={arrow}
                  alt='arrow'
                  />
              </div>

              <div className="icon icon--right">
                <Image 
                  src={arrow}
                  alt='arrow'
                  />
              </div>
            </div>
          </button>
        </Link>

        <Link href='/contact' className='flex justify-center w items-center sm:hidden text-center background-primary text-secondary rounded-3xl font font-bold py-3'>
          Contact Us
          <Image src={arrow} alt='arrow' className='w-12 h-4 ml-1'/>
        </Link>
      </div>

      <div>
        <Image
         src={heroImg}
         alt="Man in suit"
         className="lg:w-[425px] lg:h-[auto] md:w-[400px] md:h-[380px] lg:mt-0 mt-8 w-[300px] h-[200px]"
        />
      </div>
    </div>
  )
}

export default Hero