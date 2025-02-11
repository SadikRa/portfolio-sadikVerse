"use client";

import { useGetBlogByIdQuery } from "@/redux/features/Blog/blogApi";
import { IBlog } from "@/types";

/* eslint-disable @next/next/no-img-element */
const BlogDetailsCard = ({ id }: { id: string }) => {
  const { data: blogResponse, isLoading } = useGetBlogByIdQuery(id);
  const blog: IBlog | undefined = blogResponse?.data;

  if (isLoading) {
    return <p className="text-center text-gray-400">Loading blog details...</p>;
  }

  if (!blog) {
    return <p className="text-center text-red-500">Blog not found.</p>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10">
      {/* Blog Thumbnail */}
      <div className="w-full rounded-lg overflow-hidden mb-6">
        <img
          src={blog.thumbnails}
          alt={blog.title}
          className="w-full h-auto max-w-full object-cover rounded-lg"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {blog.title}
      </h1>

      {/* Blog Content */}
      <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
        {blog.content}
      </p>

      {/* Share & Back Button */}
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => window.history.back()}
          className="px-5 py-2 text-sm font-semibold bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-300"
        >
          ← Back
        </button>

        <button className="px-5 py-2 text-sm font-semibold bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300">
          Share
        </button>
      </div>
    </div>
  );
};

export default BlogDetailsCard;