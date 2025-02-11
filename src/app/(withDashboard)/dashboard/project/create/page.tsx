import { useCreateProjectMutation } from "@/redux/features/Project/projectApi";
import { TProject } from "@/types";
import { SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateProject = () => {
    const [createProject, { isLoading }] = useCreateProjectMutation();

    const onSubmit: SubmitHandler<TProject> = async (data) => {
        const projectData = {
          ...data,
        
        };
    
    
        try {
          await createProject(projectData).unwrap();
          toast.success("Product created successfully!");
        } catch (error) {
          toast.error("Failed to create product.");
          console.error(error);
        }
      };

    return (
        <div>
            
        </div>
    );
};

export default CreateProject;