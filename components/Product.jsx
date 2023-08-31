import { chemicalRange } from "@constants";
import Image from 'next/image';

const Product = () => {
  return (
    <div className="font lg:px-24 lg:py-28 md:px-16 px-8 py-12">
      <h1 className="text-4xl md:text-6xl font-semibold text-center md:mb-20 mb-6">
        Explore Our Chemical Range
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {chemicalRange.map(product => (
          <div
            key={product.productname}
            className="w-full cursor-pointer rounded-xl my-6 border-2"
          >
            <Image
              src={product.icon}
              alt="product icon"
              className="w-full max-h-60 object-contain rounded-t-lg"
            />
            <div className="w-full space-y-4 px-4 py-6">
              <p className="font-semibold text-xl text-center">
                {product.productname}
              </p>
              <button className="w-full bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white text-base font-medium rounded-md px-4 py-2">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
