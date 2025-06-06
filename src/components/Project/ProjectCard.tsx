"use client";

/* eslint-disable @next/next/no-img-element */
import { TProject } from "@/types";
import Link from "next/link";

interface ProjectCardProps {
  project: TProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden p-5 transition-transform transform hover:scale-[1.01] duration-300 flex flex-col h-full">
      {/* Scrollable Project Thumbnail */}
      <div className="w-full h-80 overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700 relative">
        <div className="h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
          <img
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="rounded-lg transition-all hover:scale-105 duration-300"
          />
        </div>
      </div>

      {/* Project Title */}
      <h2 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">
        {project.title}
      </h2>

      {/* Project Description */}
      <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow">
        {project.description.length > 150
          ? project.description.substring(0, 150) + "..."
          : project.description}
      </p>

      {/* Technologies Used */}
      <div className="mt-3 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 text-xs font-semibold rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons: Live Preview & Details */}
      <div className="mt-4 flex justify-between items-center">
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
        <Link href={`/project/${project?._id}`}>
          <button className="px-5 py-2 text-sm font-semibold bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300 shadow-md">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
