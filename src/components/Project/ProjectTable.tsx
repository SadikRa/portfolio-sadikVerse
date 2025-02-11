"use client";

import {
  useDeleteProjectMutation,
  useGetAllProjectsQuery,
} from "@/redux/features/Project/projectApi";
import { TProject } from "@/types";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";

const ProjectTable = () => {
  const [deleteProject] = useDeleteProjectMutation();
  const { data: projectData, isLoading, error } = useGetAllProjectsQuery({});

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-lg text-red-500">
        Error fetching projects
      </p>
    );

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await deleteProject(id);
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        All Projects
      </h2>

      {/* Scrollable Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-900 text-left">
              <th className="p-3 text-sm font-semibold text-gray-700 dark:text-blue-500">
                Title
              </th>
              <th className="p-3 text-sm font-semibold text-gray-700 dark:text-blue-500">
                Description
              </th>
              <th className="p-3 text-sm font-semibold text-gray-700 dark:text-blue-500">
                Technologies
              </th>
              <th className="p-3 text-sm font-semibold text-gray-700 dark:text-blue-500">
                Live Link
              </th>
              <th className="p-3 text-sm font-semibold text-gray-700 dark:text-blue-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {projectData?.data?.map((project: TProject) => (
              <tr
                key={project._id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                {/* Title */}
                <td className="p-3 text-sm text-gray-700 dark:text-gray-300">
                  {project.title}
                </td>

                {/* Description */}
                <td className="p-3 text-sm text-gray-700 dark:text-gray-300">
                  {project.description}
                </td>

                {/* Technologies */}
                <td className="p-3 text-sm text-gray-700 dark:text-gray-300">
                  {project.technologies.join(", ")}
                </td>

                {/* Live Link */}
                <td className="p-3 text-sm text-gray-700 dark:text-gray-300">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Visit Live
                  </a>
                </td>

                {/* Actions */}
                <td className="p-3 flex space-x-3">
                  {/* Update Button */}
                  <Link href={`/dashboard/project/${project?._id}`}>
                    <button className="text-blue-500 hover:text-blue-600 transition">
                      <FaEdit size={18} />
                    </button>
                  </Link>

                  {/* Delete Button */}
                  <button
                    className="text-red-500 hover:text-red-600 transition"
                    onClick={() => handleDelete(project._id)}
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

export default ProjectTable;
