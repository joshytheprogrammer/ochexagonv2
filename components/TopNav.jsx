import Image from 'next/image'
import mailW from '@assets/mailW.svg'
import phoneW from '@assets/phoneW.svg'

const Topnav = () => {
  return (
    <div className="w-full lg:px-24 md:px-16 px-6 py-4 p-6 sm:text-base text-sm md:flex justify-between text-center background-primary text-secondary font">
      <p>
        <span className="font-semibold mr-2">Opening Hours:</span>Monday to Friday - 8am to 5pm
      </p>
      <p className="hidden lg:flex">
        <Image 
         src={phoneW}
         alt="phone"
         width={20}
         height={20}
         className="mr-3"
        />
        +234-803-0512-882
      </p>
      <p className="hidden lg:flex">
        <Image 
          src={mailW}
          alt="mail"
          width={20}
          height={20}
          className="mr-3 hidden lg:flex"
          />
          info@ochexagon.com
      </p>
    </div>
  )
}

export default Topnav