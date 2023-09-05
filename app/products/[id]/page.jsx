// "use client";
// import { useState, useEffect } from "react";
// import { firestore } from "../../../firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import Image from "next/image"; // Import the Image component

// const Page = ({ params }) => {
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         console.log("Fetching product with ID:", params.id);

//         const productDocRef = doc(firestore, "products", params.id);

//         const docSnapshot = await getDoc(productDocRef);

//         if (docSnapshot.exists()) {
//           setProduct(docSnapshot.data());
//         } else {
//           console.log("Document does not exist for ID:", params.id);
//         }
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     }
//     fetchData();
//   }, [params.id]);

//   // Conditionally render the product details when 'product' is not null
//   return (
//     <div className="lg:px-24 md:px-16 px-8 py-12 flex flex-col xl:flex-row justify-center">
//       {product ? (
//         <>
//           <div className="w-full xl:w-[400px] border-2 mb-8 rounded-xl flex items-center">
//           <Image
//               src={product.url}
//               width={100}
//               height={100}
//               alt="product icon"
//               className="w-full max-h-80 object-contain rounded-t-lg"
//             />
//           </div>

//           <div className="ml-0 xl:ml-12 xl:max-w-[700px] flex flex-col justify-center">
//             <h1 className="text-3xl font-bold mb-6">{product.name}</h1>

//             <h2 className="text-2xl font-semibold">Product Description</h2>
//             <p className="mb-5">{product.description}</p>

//             <h2 className="text-2xl font-semibold">Packaging</h2>
//             <p className="mb-5">{product.packaging} </p>

//             <h2 className="text-2xl font-semibold">Storage</h2>
//             <p className="mb-5">{product.storage}</p>

//             <h2 className="text-2xl font-semibold">Key Applications</h2>
//             <p>{product.applications}</p>
//           </div>
//         </>
//       ) : (
//         <p></p>
//       )}
//     </div>
//   );
// };

// export default Page;

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

          <div className="ml-0 xl:ml-12 xl:max-w-[700px] flex flex-col justify-center">
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
        <div>Loding...</div>
      )}
    </div>
  );
};

export default page;
