import Image from 'next/image'
import Link from 'next/link'
import arrow from '@assets/arrow.svg';

const Cta = () => {
  return (
    <div className='pt-4 pb-24 flex flex-col items-center'>
      <h1 className='font sm:text-[56px] text-[30px] font-extrabold mb-12'>Want to Know More?</h1>

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

        <Link href='/contact' className='flex justify-center w-[200px] items-center sm:hidden text-center background-primary text-secondary rounded-3xl font font-bold py-3'>
          Contact Us
          <Image src={arrow} alt='arrow' className='w-12 h-4 ml-1'/>
            
        </Link>
    </div>
  )
}

export default Cta