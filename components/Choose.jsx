import Image from 'next/image'
import flask from '@assets/flask.svg'
import bulb from '@assets/bulb.svg'
import drop from '@assets/drop.svg'

const Choose = () => {
  return (
    <div className="lg:px-24 md:px-16 px-8 py-12">
      <h1 className="font text-4xl md:text-[56px] font-semibold text-center md:mb-12 mb-6">Why Choose Us?</h1>

      <div className="flex flex-col md:flex-row items-center lg:justify-between">
        <div className="flex flex-col justify-center items-center mx-3 my-4 max-w-[400px] py-8 px-4 rounded-2xl background-accent">
          <div className="background-primary flex items-center justify-center p-6 rounded-[24px] w-[100px] lg:w-[85px] xl:w-[100px]">
            <Image 
            src={flask}
            alt="flask" 
            />
          </div>

          <h2 className="font font-semibold text-xl md:text-2xl lg:text-2xl xl:text-3xl text-center my-3 xl:my-6">
            Clemical Solutions
          </h2>

          <p className="font md:px-3 lg:font-xl xl:text-xl text-center">
            Supply a diverse range of industrial chemicals various needs
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mx-3 my-4 max-w-[400px] py-8 px-4 rounded-2xl background-accent">
          <div className="background-primary flex items-center justify-center p-6 rounded-[24px] w-[100px] lg:w-[85px] xl:w-[100px]">
            <Image 
            src={bulb}
            alt="flask" 
            />
          </div>

          <h2 className="font font-semibold text-xl md:text-2xl lg:text-2xl xl:text-3xl text-center my-3 xl:my-6">
            Innovative Services
          </h2>

          <p className="font md:px-3 lg:font-xl xl:text-xl text-center">
           Delivering innovative solutions, repackaging & efficient delivery
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mx-3 my-4 max-w-[400px] py-8 px-4 rounded-2xl background-accent">
          <div className="background-primary flex items-center justify-center p-6 rounded-[24px] w-[100px] lg:w-[85px] xl:w-[100px]">
            <Image 
            src={drop}
            alt="flask" 
            />
          </div>

          <h2 className="font font-semibold text-xl md:text-2xl lg:text-2xl xl:text-3xl text-center my-3 xl:my-6">
            Environmental Care
          </h2>

          <p className="font md:px-3 lg:font-xl xl:text-xl text-center">
           Contributing to sustainability with oil spill cleanup solutions
          </p>
        </div>
      </div>
    </div>
  )
}

export default Choose