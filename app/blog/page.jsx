
import BlogJumbotron from "@components/BlogJumbotron"
import BlogPostCard from "@components/BlogPostCard"

const page = () => {
  return (
    <div className="">
      <BlogJumbotron />

      <div className="lg:px-24 md:px-16 px-8 py-4 flex flex-col md:flex-row justify-between items-center">
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </div>
    </div>
  )
}

export default page