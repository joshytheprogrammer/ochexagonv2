"use client";
import Read from "@assets/read.svg";
import Image from "next/image";

import { useState, useEffect } from "react";
import { fetchBlog } from "../../../../firebase/utils";

const page = ({ params }) => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchBlog();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }
    fetchData();
  }, []);

  const id = String(params.id);
  const post = blog.find((postCard) => postCard.id === id);

  return (
    <div className="py-12">
      {post ? (
        <>
          <div className="lg:px-24 md:px-16 px-8 pb-8 ">
            <Image
              src={post.data.coverImage}
              width={100}
              height={100}
              alt="blog Image"
              className="w-full h-[200px] lg:h-[350px]"
            />

            <div className="py-12">
              <h1 className="font xl:text-[56px] lg:text-[42px] md:text-[56px] text-[32px] text-center font-extrabold sm:leading-[72px] md:mb-4  mb-3">
                {post.data.title}
              </h1>

              <div className="flex flex-col lg:flex-row justify-center items-center font text-lg lg:text-2xl text-gray-600">
                <div className="mx-2 mb-2">{post.data.author}</div>

                <div className="flex justify-center lg:flex-row mb-2">
                  <div className="mx-2">12th Aug, 2023</div>
                  <div className="mx-2 flex items-center">
                    <Image 
                     src={Read}
                     width={25}
                     height={25}
                     className="mr-4"
                    />
                    <span>
                      3 mins read
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xl font">{post.data.content}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Render a loading message or handle the case where the post is not found
        <p>Loading...</p>
      )}
    </div>
  );
};

export default page;
