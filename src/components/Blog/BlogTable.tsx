/* eslint-disable @next/next/no-img-element */
"use client";

import {
  useDeleteOrderMutation,
  useGetAllBlogQuery,
} from "@/redux/features/Blog/blogApi";
import { IBlog } from "@/types";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";

const BlogTable = () => {
  const [deleteOrder] = useDeleteOrderMutation();
  const { data: blogData, isLoading, error } = useGetAllBlogQuery({});

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-lg text-red-500">Error fetching blogs</p>
    );

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      await deleteOrder(id);
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        All Blogs
      </h2>

      {/* Scrollable Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-900 text-left">
              <th className="p-3 text-sm font-semibold text-gray-700 dark:text-blue-500">
                Thumbnail
              </th>
              <th className="p-3 text-sm font-semibold text-gray-700 dark:text-blue-500">
                Title
              </th>
              <th className="p-3 text-sm font-semibold text-gray-700 dark:text-blue-500">
                Content
              </th>
              <th className="p-3 text-sm font-semibold text-gray-700 dark:text-blue-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {blogData?.data?.map((blog: IBlog) => (
              <tr
                key={blog._id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                {/* Thumbnail */}
                <td className="p-3 text-sm">
                  <img
                    src={blog.thumbnails}
                    alt={blog.title}
                    className="w-20 h-12 object-cover rounded-md"
                  />
                </td>

                {/* Title */}
                <td className="p-3 text-sm text-gray-700 dark:text-gray-300">
                  {blog.title}
                </td>

                {/* Content */}
                <td className="p-3 text-sm text-gray-700 dark:text-gray-300">
                  {blog.content.length > 50
                    ? `${blog.content.substring(0, 50)}...`
                    : blog.content}
                </td>

                {/* Actions */}
                <td className="p-3 flex space-x-3">
                  {/* Update Button */}
                  <Link href={`/dashboard/blogs/update/${blog._id}`}>
                    <button className="text-blue-500 hover:text-blue-600 transition">
                      <FaEdit size={18} />
                    </button>
                  </Link>

                  {/* Delete Button */}
                  <button
                    className="text-red-500 hover:text-red-600 transition"
                    onClick={() => handleDelete(blog._id)}
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogTable;
