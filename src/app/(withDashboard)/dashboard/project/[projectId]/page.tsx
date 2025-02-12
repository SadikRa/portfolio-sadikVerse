import ProjectUpdateForm from "@/components/Project/ProjectUpdateForm";

const UpdateProject = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;

  return (
    <div>
      <ProjectUpdateForm id={projectId} />
    </div>
  );
};

export default UpdateProject;
