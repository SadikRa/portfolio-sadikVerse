import { TProject } from "@/types";
import Image from "next/image";

interface ProjectCardProps {
  project: TProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden p-5 transition-transform transform hover:scale-[1.03] duration-300">
      {/* Scrollable Project Thumbnail */}
      <div className="w-full h-80 overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700 relative">
        <div className="h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
          <Image
            src="https://i.ibb.co.com/mrVXz2Th/logo.png"
            alt="Project Screenshot"
            width={800}
            height={400}
            layout="responsive"
            unoptimized={true}
          />
        </div>
      </div>

      {/* Project Title */}
      <h2 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">
        {project.title}
      </h2>

      {/* Project Description */}
      <p className="text-gray-600 dark:text-gray-300 mt-2">
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

      {/* Live Preview Button */}
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-5 py-2 text-sm font-semibold bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300 shadow-md"
        >
          Live Preview
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
