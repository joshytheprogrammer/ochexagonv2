"use client"
import { useState, useEffect } from 'react';
import Jumbotron from "@components/Jumbotron";
import Image from "next/image";


import { fetchBlog } from '../../firebase/utils';

import Link from "next/link";

import AOS from 'aos';
import 'aos/dist/aos.css';

const page = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchBlog();
        setBlog(data);
      } catch (error) {

      }
    }
    fetchData();
  }, []);


  return (
    <div className="">
      <Jumbotron
        content="Blog"
        url="https://res.cloudinary.com/dsgvwxygr/image/upload/v1693116985/ochexagon/photo_1_2023-08-27_07-07-22_o5zhe4.jpg"
      />

      <div className="flex justify-between flex-wrap lg:p-24 md:px-16 md:pt-20 md:pb-0 px-8 py-12" data-aos="zoom-in">
        {[
          blog.map((post) => (
            <div className="w-full md:w-[49%] lg:w-[32%] mb-12 border border-black rounded-xl" key={post.data.title}>
              <Image
                src={post.data.coverImage}
                alt="Image"
                className="w-full h-[250px] rounded-t-xl"
                width={80}
                height={80}
              />

              <div className="p-4">
                <h2 className="font font-bold text-2xl my-2">{post.data.title}</h2>

                <p className="font text-sm sm:ext-md h-[100px] overflow-hidden">
                  {post.data.content}
                </p>

                <Link href={`/blog/posts/${post.id}`}>
                  <button className="background-primary text-white my-2 py-2 px-5 mt-2  rounded-lg font text-base">
                    Read
                  </button>
                </Link>
              </div>
            </div>
          )),
        ]}
      </div>
    </div>
  );
};

export default page;
