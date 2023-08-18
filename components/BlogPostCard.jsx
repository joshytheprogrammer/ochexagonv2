import Image from "next/image"
import blog1 from "@assets/blog1.jpg"

const BlogPostCard = () => {
  return (
    <div className="mx-3 my-5 w-[300px] sm:w-[400px] border border-black rounded-xl">
        <Image 
         src={blog1}
         alt="Image"
         className="w-full h-auto rounded-t-xl"
        />
        
        <div className="p-4">
            <h2 className="font font-bold text-2xl my-2">Blog post title</h2>

            <p className="font text-sm sm:ext-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, at ab temporibus provident ratione error iste amet reiciendis placeat atque eum, facilis, obcaecati doloribus aperiam delectus in sint laboriosam inventore.
            </p>
        </div>
    </div>
  )
}

export default BlogPostCard