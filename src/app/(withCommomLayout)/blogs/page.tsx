"use client";

import BlogCard from "@/components/Blog/BlogCard";
import { useGetAllBlogQuery } from "@/redux/features/Blog/blogApi";
import { IBlog } from "@/types";

const BlogsPage = () => {
  const { data: blogData, isLoading, error } = useGetAllBlogQuery({});

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-lg text-red-500">Error fetching blogs</p>
    );

  return (
    <div className="container mx-auto px-4 py-6 mt-20 mb-8">
      <h1 className="text-3xl font-bold text-center mb-6">Latest Blogs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogData?.data?.map((blog: IBlog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
