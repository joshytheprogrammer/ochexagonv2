import Image from 'next/image'
import flask from '@assets/flask.svg'
import rocket from '@assets/rocket.svg'
import recycle from '@assets/recycle.svg'

const What = () => {
  return (
    <div className="lg:p-24 md:px-16 px-8 py-12">
      <h1 className="font text-4xl md:text-[56px] font-semibold text-center md:mb-20 mb-12">What We Do</h1>
      
      <div className="flex flex-wrap justify-between md:flex-row items-center">
        <div className="w-full md:w-[49%] lg:w-[32%] rounded-2xl lg:py-20 py-12 px-3 lg:mb-0 mb-16 flex flex-col items-center background-accent max-h-[370px]">
          <div className="background-primary flex items-center justify-center px-3 py-3 rounded-[24px] w-[100px] lg:w-[85px] xl:w-[100px]">
            <Image 
            src={flask}
            alt="flask"
            className="w-[45px] h-[50px]" 
            />
          </div>

          <h2 className="font font-semibold text-xl md:text-2xl lg:text-2xl xl:text-32l text-center my-3 xl:my-6">
            Clemical Solutions
          </h2>

          <p className="font  lg:font-xl xl:text-lg text-center">
            Supply a diverse range of industrial chemicals various needs
          </p>
        </div>

        <div className="w-full md:w-[49%] lg:w-[32%] rounded-2xl lg:py-20 py-12 px-3 lg:mb-0 mb-16 flex flex-col items-center background-accent max-h-[370px]">
          <div className="background-primary flex items-center justify-center px-3 py-3 rounded-[24px] w-[100px] lg:w-[85px] xl:w-[100px]">
            <Image 
            src={rocket}
            alt="flask"
            className="w-[45px] h-[50px]" 
            />
          </div>

          <h2 className="font font-semibold text-xl md:text-2xl lg:text-2xl xl:text-2xl text-center my-3 xl:my-6">
            Innovative Services
          </h2>

          <p className="font lg:font-xl xl:text-lg text-center">
           Delivering innovative solutions, repackaging & efficient delivery
          </p>
        </div>
        <div className="w-full md:w-[49%] lg:w-[32%] rounded-2xl lg:py-20 py-12 px-3 flex flex-col items-center background-accent max-h-[370px]">
          <div className="background-primary flex items-center justify-center px-3 py-3 rounded-[24px] w-[100px] lg:w-[85px] xl:w-[100px]">
            <Image 
            src={recycle}
            alt="flask"
            className="w-[45px] h-[50px]" 
            />
          </div>

          <h2 className="font font-semibold text-xl md:text-2xl lg:text-2xl xl:text-32l text-center my-3 xl:my-6">
            Environmental Care
          </h2>

          <p className="font lg:font-xl xl:text-lg text-center">
           Contributing to the environmental sustainability with oil spill cleanup solutions
          </p>
        </div>
      </div>
    </div>
  )
}

export default What