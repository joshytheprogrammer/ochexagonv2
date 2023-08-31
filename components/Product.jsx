import { chemicalRange } from "@constants";
import Image from 'next/image'

const Product = () => {
  return (
    <div className="lg:px-24 lg:py-28 md:px-16 px-8 py-12">
        <h1 className="font text-4xl md:text-6xl font-semibold text-center md:mb-20 mb-6">Explore Our Chemical Range</h1>

        <div className="flex flex-wrap justify-between md:flex-row items-center">
          {chemicalRange.map(product => (
            <div className="w-full md:w-[42%] lg:w-[28%] background-primary  cursor-pointer rounded-xl my-6 pb-12 border-2 flex flex-col justify-center items-center">
              <Image 
               src={product.icon}
               alt="prodcut icon"
               className="w-full h-[200px] rounded-t-lg"
              />
              <p className="font font-semibold mt-12 text-xl text-white px-6">
                {product.productname}
              </p>
            </div>
          ))
          }
        </div>
    </div>
  )
}

export default Product