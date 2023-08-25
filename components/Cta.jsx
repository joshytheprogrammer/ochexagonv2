import Image from 'next/image'
import Link from 'next/link'
import arrow from '@assets/arrow.svg';

const Cta = () => {
  return (
    <div className='py-16 flex flex-col items-center'>
      <h1 className='font sm:text-[56px] text-[30px] font-extrabold mb-12'>Want to Know More?</h1>

      <button className='contactBtn'>
              <Link href='/contact' className='flex items-center'>
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
              </Link>
            </button>
    </div>
  )
}

export default Cta