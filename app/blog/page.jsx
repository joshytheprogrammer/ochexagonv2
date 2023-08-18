
import Jumbotron from "@components/Jumbotron"
import BlogPostCard from "@components/BlogPostCard"

const page = () => {
  return (
    <div className="">
      <Jumbotron content="Blog" url="https://res.cloudinary.com/dsgvwxygr/image/upload/v1678207938/uacef/gallery_bg_lwmxls.webp"/>

      <div className="lg:px-24 md:px-16 px-8 py-4 flex flex-col md:flex-row justify-between items-center">
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </div>
    </div>
  )
}

export default page