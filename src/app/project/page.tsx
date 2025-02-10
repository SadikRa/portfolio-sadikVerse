"use client";

import ProjectCard from "@/components/Project/ProjectCard";
import { useGetAllProjectsQuery } from "@/redux/features/Project/projectApi";
import { TProject } from "@/types";

const ProjectsPage = () => {
  const { data: projectData, isLoading, error } = useGetAllProjectsQuery({});

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-lg text-red-500">
        Error fetching Projects
      </p>
    );

  return (
    <div className="container mx-auto px-4 py-6 mt-16">
      <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projectData?.data?.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
