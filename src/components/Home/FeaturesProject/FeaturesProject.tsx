"use client";

import ProjectCard from "@/components/Project/ProjectCard";
import { useGetAllProjectsQuery } from "@/redux/features/Project/projectApi";
import { TProject } from "@/types";
import React from "react";

const FeaturesProject = () => {
  const { data: projectData, isLoading, error } = useGetAllProjectsQuery({});

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-lg text-red-500">
        Error fetching Projects
      </p>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {projectData?.data?.slice(0, 2).map((project: TProject) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default FeaturesProject;
