import { IBlog } from "@/types";
import Image from "next/image";

interface BlogCardProps {
  blog: IBlog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden p-4">
      {/* Blog Thumbnail */}
      <div className="w-full h-48 relative">
      <Image
        src={blog.thumbnails}        // Image source
        alt={blog.title}             // Accessible alt text
        layout="fill"                // Fill the parent container
        objectFit="cover"            // Maintain aspect ratio, crop if needed
        className="rounded-lg"       // Apply rounded corners
      />
      </div>

      {/* Blog Title */}
      <h2 className="text-xl font-bold mt-4 text-gray-900 dark:text-white">
        {blog.title}
      </h2>

      {/* Blog Content Preview */}
      <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
        {blog.content.length > 100
          ? blog.content.substring(0, 100) + "..."
          : blog.content}
      </p>

      {/* Read More Button */}
      <button className="mt-4 px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
