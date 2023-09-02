// import { chemicalRange } from "@constants";
// import Image from "next/image";

// const page = ({ params }) => {

//   const id = params.id

//   const product = chemicalRange.find((chemical) => chemical.id === Number(id));

//   return (
//     <div className="lg:px-24 md:px-16 px-8 py-16 flex flex-col xl:flex-row justify-center">
//       <div className="w-full xl:w-[400px] border-2 mb-8 rounded-xl flex item">
//         <Image
//         src={product.icon}
//         className="w-full h-[250px] md:h-[500px] xl:h-auto rounded-xl"
//         />
//       </div>

//       <div className="ml-0 xl:ml-12 xl:max-w-[700px] flex flex-col justify-center">
//         <h1 className="text-3xl font-bold mb-2">{product.productname}</h1>

//         <h2 className="text-2xl font-semibold">Product Description</h2>
//         <p className="mb-2">{product.productDescription}</p>

//         <h2 className="text-2xl font-semibold">Packaging</h2>
//         <p className="mb-2">{product.packaging} </p>

//         <h2 className="text-2xl font-semibold">Storage</h2>
//         <p className="mb-2">{product.storage}</p>

//         <h2 className="text-2xl font-semibold">Key Applications</h2>
//         <p>{product.applications}</p>
//       </div>
//     </div>
//   )
// }

// export default page

"use client";
import { useState, useEffect } from "react";
import { firestore } from "../../../../firebase/firebase";
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
    <div className="lg:px-24 md:px-16 px-8 py-16 flex flex-col xl:flex-row justify-center">
      {product ? (
        <>
          <div className="w-full xl:w-[400px] border-2 mb-8 rounded-xl flex item">
            <Image
              src={product.url}
              width={100}
              height={100}
              className="w-full h-[250px] md:h-[500px] xl:h-auto rounded-xl"
            />
          </div>

          <div className="ml-0 xl:ml-12 xl:max-w-[700px] flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

            <h2 className="text-2xl font-semibold">Product Description</h2>
            <p className="mb-2">{product.description}</p>

            <h2 className="text-2xl font-semibold">Packaging</h2>
            <p className="mb-2">{product.packaging} </p>

            <h2 className="text-2xl font-semibold">Storage</h2>
            <p className="mb-2">{product.storage}</p>

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

export default Page;
