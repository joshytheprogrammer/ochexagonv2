import { chemicalRange } from "@constants";
import Image from 'next/image'

const Product = () => {
  return (
    <div className="lg:p-24 md:px-16 px-8 py-12">
        <h1 className="font text-4xl md:text-6xl font-semibold text-center md:mb-20 mb-6">Explore Our Chemical Range</h1>

        <div className="flex flex-wrap justify-between md:flex-row items-center">
          {chemicalRange.map(product => (
            <div className="w-full md:w-[30%] lg:w-[22%] background-accent rounded-xl my-6 py-6 flex flex-col justify-center items-center">
              <Image 
               src={product.icon}
               alt="prodcut icon"
               className="w-[60px]"
              />
              <p className="font font-semibold mt-4 text-sm px-6">
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