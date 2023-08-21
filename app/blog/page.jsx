import Jumbotron from "@components/Jumbotron"
import BlogPostCard from "@components/BlogPostCard"
import { blogPostCard } from "@constants"

const page = () => {
  return (
    <div className="">
      <Jumbotron content="Blog" url="https://res.cloudinary.com/dsgvwxygr/image/upload/v1678207938/uacef/gallery_bg_lwmxls.webp"/>

      <div className="lg:p-24 md:px-16 px-8 py-12 flex flex-wrap justify-between md:flex-row items-center">
        {[blogPostCard.map((content) => (
          <BlogPostCard />
        ))]
        }
      </div>
    </div>
  )
}

export default page