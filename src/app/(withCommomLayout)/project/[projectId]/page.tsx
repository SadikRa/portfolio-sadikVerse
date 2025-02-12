import ProjectDetailsCard from "@/components/Project/ProjectDetailsCard";
import React from "react";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;

  return (
    <div className="min-h-screen py-10 px-4 md:px-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <ProjectDetailsCard id={projectId} />
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
