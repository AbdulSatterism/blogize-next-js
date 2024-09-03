import { TBlog } from "@/type/blog.type";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlog = ({ blogs }: { blogs: TBlog[] }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center text-3xl">
        Latest Blog From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-gray-400 w-2/4 mx-auto text-center  mb-5">
        <i>
          here some latest blog and you can explore blog and create your opinion
          freely and enjoy yourself
        </i>{" "}
      </p>

      <div className="grid grid-cols-2 gap-6 my-6 mx-auto">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6 mx-auto">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
