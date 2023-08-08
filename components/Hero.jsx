import Link from 'next/link'
import Image from 'next/image'
import heroImg from '@assets/heroImg.png'
import arrow from '@assets/arrow.svg'

const Hero = () => {
  return (
    <div className="px-24 py-8 sm:flex justify-between items-center hidden">
      <p className="w-[800px]">
        <h1 className='sm:block font text-[56px] font-extrabold leading-[72px] mb-12'>
          Empowering Industries with Innovative Chemical Solutions
        </h1>

        <Link href='/contact' className="text-[24px] font background-primary py-3 rounded-[32px] flex items-center justify-center w-[240px] text-secondary">
          Contact Us <Image src={arrow} width={40} className="ml-4" />
        </Link>
      </p>
      <div>
        <Image
         src={heroImg}
         width={400}
        />
      </div>
    </div>
  )
}

export default Hero