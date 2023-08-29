import Image from 'next/image'
import Link from 'next/link'
import instagram from '@assets/instagram.svg'
import facebook from '@assets/facebook.svg'
import twitter from '@assets/twitter.svg'
import linkedin from '@assets/linkedin.svg'
import phone from '@assets/phone.svg'
import location from '@assets/location.svg'
import mail from '@assets/mail.svg'
import logo from '@assets/logo.svg'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-between lg:px-24 md:px-16 md:py-16 sm:px-24 sm:py-8 px-8 py-12'>
        <div className='flex flex-col justify-between h-[250px]'>
          <Image 
           src={logo}
           alt='logo'
           className='w-[120px]'
          />

          <p className='font font-semibold text-xl'>
            Elevating Industries, <br />
            Empowering Solutions.
          </p>
        </div>

        <div className='flex flex-col justify-between font mt-12 sm:my-0 h-[250px]'>
          <h2 className='text-3xl font-semibold mb'>Contact</h2>
          <div className='flex items-center sm:lg text-md my-6 sm:my-0'>
            <Image 
             src={location}
             alt='location'
             className='w-6 mr-4 h-auto'
            />

            <p className='font max-w-[300px]'>
              417, Apapa/Oshodi Expressway by Iyana Itire Ilasamaja Lagos.
            </p>              
          </div>
          <div className='flex sm:text-lg text-md my-4 sm:my-0'>
            <Image 
             src={phone}
             alt='phone'
             className='w-6 mr-4 h-auto'
            />

            <p className='font w-[300px]'>
            +234-803-0512-882
            </p>              
          </div>
          <div className='flex sm:text-lg text-md mt-4 sm:mt-0'>
            <Image 
             src={mail}
             alt='mail'
             className='w-6 mr-4 h-auto'
            />
            <p className='font w-[300px]'>
            info@ochexagon.com
            </p>              
          </div>
        </div>

        <div className='flex flex-col justify-between font text-xl sm:mt-0 mt-12 h-[250px]'>

        <h2 className='text-3xl font-semibold mb-3'>Quick Links</h2>

          <Link href='/' className="hover:text-blue-800 my-2">
            Home
          </Link>
          <Link href='/about' className="hover:text-blue-800 my-2">
            About
          </Link>
          <Link href='/blog' className="hover:text-blue-800 my-2">
            Blog
          </Link>
          <Link href='contact' className="hover:text-blue-800 my-2">
          Contact us
        </Link>
        </div>
      </div>
      <div className="background-primary text-secondary flex justify-between md:px-16 sm:px-24 sm:py-8 px-4 py-6 font">
        <div className='text-sm sm:text-base'>
          <p className="mb-3 sm:mb-0">Copyright &copy; 2023 <span className='font-semibold'>ochexagon</span>. All rights reserved </p>
          <p>this website was built by <Link href="https://github.com/RalphFred" target="_blank" className="font-bold cursor-pointer">raphaelKwaghuter</Link> and <Link href="https://joshytheprogrammer.com/" target="_blank" className="font-bold cursor-pointer">joshytheprogrammer</Link></p>
        </div>
        <div className="hidden sm:flex">
          <Image 
           src={instagram}
           alt='instagram'
           className='w-auto h-auto mx-2'
          />
          <Image 
           src={twitter}
           alt='twitter'
           className='w-auto h-auto mx-2'
          />
          <Image 
           src={facebook}
           alt='facebook'
           className='w-auto h-auto mx-2'
          />
          <Image 
           src={linkedin}
           alt='linkedin'
           className='w-auto h-auto mx-2'
          />
        </div>
      </div>
    </div>
  )
}

export default Footer