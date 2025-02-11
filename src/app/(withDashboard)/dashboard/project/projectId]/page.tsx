import ProjectUpdateForm from "@/components/Project/ProjectUpdateForm";

const UpdateProject = async ({
  params,
}: {
  params: Promise<{ _id: string }>;
}) => {
  const { _id } = await params;

  console.log("project id", _id);

  return (
    <div>
      <ProjectUpdateForm id={_id} />
    </div>
  );
};

export default UpdateProject;
