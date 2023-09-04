"use client";
import { useState, useEffect } from "react";
import { firestore } from "../../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image"; // Import the Image component

const Page = ({ params }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Fetching product with ID:", params.id);

        const productDocRef = doc(firestore, "products", params.id);

        const docSnapshot = await getDoc(productDocRef);

        if (docSnapshot.exists()) {
          setProduct(docSnapshot.data());
        } else {
          console.log("Document does not exist for ID:", params.id);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    fetchData();
  }, [params.id]);

  // Conditionally render the product details when 'product' is not null
  return (
    <div className="lg:px-24 md:px-16 px-8 py-12 flex flex-col xl:flex-row justify-center">
      {product ? (
        <>
          <div className="w-full xl:w-[400px] border-2 mb-8 rounded-xl flex items-center">
          <Image
              src={product.url}
              width={100}
              height={100}
              alt="product icon"
              className="w-full max-h-80 object-contain rounded-t-lg"
            />
          </div>

          <div className="ml-0 xl:ml-12 xl:max-w-[700px] flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-6">{product.name}</h1>

            <h2 className="text-2xl font-semibold">Product Description</h2>
            <p className="mb-5">{product.description}</p>

            <h2 className="text-2xl font-semibold">Packaging</h2>
            <p className="mb-5">{product.packaging} </p>

            <h2 className="text-2xl font-semibold">Storage</h2>
            <p className="mb-5">{product.storage}</p>

            <h2 className="text-2xl font-semibold">Key Applications</h2>
            <p>{product.applications}</p>
          </div>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

// -----------------------------------Server Error ---------------------------------

export async function getServerSideProps() {
  // Fetch data from external API
  const productDocRef = doc(firestore, "products", params.id);

  const res = await fetch(productDocRef)
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}

export default Page;
