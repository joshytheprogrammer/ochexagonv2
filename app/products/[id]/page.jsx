"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchProducts } from "../../../firebase/utils";

const page = ({ params }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchProducts();
        setProduct(data);
      } catch (error) {}
    }
    fetchData();
  }, []);

  const id = String(params.id);
  const chemicalItem = product.find((chemical) => chemical.id === id);

  if(!chemicalItem) {
    return <p>.</p>;
  }

  return (
    <div className="lg:px-24 md:px-16 px-8 py-12 flex flex-col xl:flex-row justify-center">
      {chemicalItem ? (
        <>
          <div className="w-full xl:w-[400px] border-2 mb-8 rounded-xl flex items-center">
            <Image
              src={chemicalItem.data.url}
              width={100}
              height={100}
              alt="product icon"
              className="w-full max-h-80 object-contain rounded-t-lg"
            />
          </div>

          <div className="ml-0 xl:ml-12 xl:max-w-[700px] flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-3xl font-bold mb-6">{chemicalItem.data.name}</h1>

            <h2 className="text-2xl font-semibold">Product Description</h2>
            <p className="mb-5">{chemicalItem.data.description}</p>

            <h2 className="text-2xl font-semibold">Packaging</h2>
            <p className="mb-5">{chemicalItem.data.packaging} </p>

            <h2 className="text-2xl font-semibold">Storage</h2>
            <p className="mb-5">{chemicalItem.data.storage}</p>

            <h2 className="text-2xl font-semibold">Key Applications</h2>
            <p>{chemicalItem.data.applications}</p>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default page;
