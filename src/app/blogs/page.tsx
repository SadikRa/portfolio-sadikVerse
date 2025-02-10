"use client";

import BlogCard from "@/components/Blog/BlogCard";
import { useGetAllBlogQuery } from "@/redux/features/Blog/blogApi";
import { IBlog } from "@/types";

const Page = () => {
  // Correct Destructuring
  const { data: blogData, isLoading, error } = useGetAllBlogQuery({});

  console.log(blogData);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching blogs</p>;

  return (
    <div>
      {blogData?.data?.map((blog: IBlog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Page;
