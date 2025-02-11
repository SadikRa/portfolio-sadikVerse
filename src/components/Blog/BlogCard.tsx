/* eslint-disable @next/next/no-img-element */
import { IBlog } from "@/types";
import Link from "next/link";

interface BlogCardProps {
  blog: IBlog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden p-5 transition-transform transform hover:scale-[1.01] duration-300 flex flex-col h-full">
      {/* Blog Thumbnail */}
      <div className="w-full h-52 relative rounded-lg overflow-hidden">
        <img
          src={blog.thumbnails}
          alt={blog.title}
          className="rounded-lg transition-all hover:scale-105 duration-300 w-full h-full object-cover"
        />
      </div>

      {/* Blog Title */}
      <h2 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">
        {blog.title}
      </h2>

      {/* Blog Content Preview */}
      <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow">
        {blog.content.length > 120
          ? blog.content.substring(0, 120) + "..."
          : blog.content}
      </p>

      {/* Read More Button - Stays at Bottom */}
      <div className="mt-4">
        <Link href={`/blogs/${blog._id}`} >
          <button className="w-full px-5 py-2 text-sm font-semibold bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300 shadow-md">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
