"use client";

import { useGetProjectByIdQuery } from "@/redux/features/Project/projectApi";
import { TProject } from "@/types";

/* eslint-disable @next/next/no-img-element */
const ProjectDetailsCard = ({ id }: { id: string }) => {
  const { data: projectResponse, isLoading } = useGetProjectByIdQuery(id);
  const project: TProject | undefined = projectResponse?.data;

  if (isLoading) {
    return (
      <p className="text-center text-gray-400">Loading project details...</p>
    );
  }

  if (!project) {
    return <p className="text-center text-red-500">Project not found.</p>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10">
      {/* Scrollable Full-Height Project Thumbnail */}
      <div className="w-full h-[500px] overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700 relative">
        <div className="h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Project Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-6">
        {project.title}
      </h1>

      {/* Project Description */}
      <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
        {project.description}
      </p>

      {/* Technologies Used */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 text-sm font-semibold rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={() => window.history.back()}
          className="px-5 py-2 text-sm font-semibold bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300"
        >
          ← Back
        </button>

        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-semibold bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Live Preview
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
