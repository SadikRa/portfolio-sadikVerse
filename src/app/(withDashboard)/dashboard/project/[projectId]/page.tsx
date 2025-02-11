import ProjectUpdateForm from "@/components/Project/ProjectUpdateForm";

const UpdateProject = ({ params }: { params: { projectId: string } }) => {
  const { projectId } = params;


  return (
    <div>
      <ProjectUpdateForm id={projectId} />
    </div>
  );
};

export default UpdateProject;
