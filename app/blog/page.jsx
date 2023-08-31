import Jumbotron from "@components/Jumbotron";
import Image from "next/image";
import blog1 from "@assets/blog1.jpg";
import { blogPostCard } from "@constants";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      <Jumbotron
        content="Blog"
        url="https://res.cloudinary.com/dsgvwxygr/image/upload/v1693116985/ochexagon/photo_1_2023-08-27_07-07-22_o5zhe4.jpg"
      />

      <div className="flex justify-between flex-wrap lg:p-24 md:px-16 md:pt-20 md:pb-0 px-8 py-12">
        {[
          blogPostCard.map((post) => (
            <div className="w-full md:w-[49%] lg:w-[32%] mb-12 border border-black rounded-xl">
              <Image
                src={blog1}
                alt="Image"
                className="w-full h-auto rounded-t-xl"
              />

              <div className="p-4">
                <h2 className="font font-bold text-2xl my-2">{post.title}</h2>

                <p className="font text-sm sm:ext-md h-[100px] overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, at ab temporibus provident ratione error iste amet
                  reiciendis placeat atque eum, facilis, obcaecati doloribus
                  aperiam delectus in sint laboriosam inventore.
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
