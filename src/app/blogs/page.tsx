"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { TBlog } from "@/type/blog.type";
import React from "react";

const BlogsPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", { cache: "no-store" });
  // const blogs = await res.json();
  const { data: blogs } = useGetBlogsQuery(undefined);
  // console.log(blogs);
  return (
    <div className="w-[90%] mx-auto my-10">
      <h1 className="text-center text-3xl ">
        All Blog From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-gray-400 w-2/4 mx-auto text-center  mb-5">
        <i>
          here some latest blog and you can explore blog and create your opinion
          freely and enjoy yourself
        </i>{" "}
      </p>

      <div className="grid grid-cols-3 gap-6 mt-6 mx-auto">
        {blogs?.map((blog: TBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
