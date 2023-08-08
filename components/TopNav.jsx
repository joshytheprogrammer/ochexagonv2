import Image from 'next/image'
import mailW from '@assets/mailW.svg'
import phoneW from '@assets/phoneW.svg'

const Topnav = () => {
  return (
    <div className="w-full sm:px-24 sm:py-4 px-4 py-3 sm:text-base text-sm sm:flex justify-between text-center background-primary text-secondary font">
      <p>
        <span className="font-semibold mr-2">Opening Hours:</span>Monday to Friday - 8am to 5pm
      </p>
      <p className="hidden sm:flex">
        <Image 
         src={phoneW}
         width={20}
         height={20}
         className="mr-3"
        />
        +234-803-0512-882
      </p>
      <p className="hidden sm:flex">
        <Image 
          src={mailW}
          width={20}
          height={20}
          className="mr-3"
          />
          info@ochexagon.com
      </p>
    </div>
  )
}

export default Topnav