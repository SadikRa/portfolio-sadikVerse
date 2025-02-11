"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateProjectMutation } from "@/redux/features/Project/projectApi";
import { TProject } from "@/types";
import { toast } from "sonner";

const ProjectCreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TProject>();

  const [createProject, { isLoading }] = useCreateProjectMutation();

  const onSubmit: SubmitHandler<TProject> = async (data) => {
    const projectData = { ...data };

    try {
      await createProject(projectData).unwrap();
      toast.success("Project created successfully!");
    } catch (error) {
      toast.error("Failed to create project.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-all duration-300">
      <h2 className="text-2xl font-bold text-[#2563EB] dark:text-[#3B82F6] text-center mb-6">
        Add New Project
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Project Title */}
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            {...register("title", { required: "Title is required" })}
            placeholder="Enter project title"
            className="dark:bg-gray-800 dark:text-white"
          />
          {errors.title && (
            <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Project Description */}
        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Enter project description"
            className="dark:bg-gray-800 dark:text-white"
          />
          {errors.description && (
            <p className="text-sm text-red-500 mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Project Image */}
        <div>
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            {...register("image", { required: "Image URL is required" })}
            placeholder="Enter image URL"
            className="dark:bg-gray-800 dark:text-white"
          />
          {errors.image && (
            <p className="text-sm text-red-500 mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* Live Link */}
        <div>
          <Label htmlFor="liveLink">Live Link</Label>
          <Input
            id="liveLink"
            {...register("liveLink", { required: "Live link is required" })}
            placeholder="Enter project live link"
            className="dark:bg-gray-800 dark:text-white"
          />
          {errors.liveLink && (
            <p className="text-sm text-red-500 mt-1">
              {errors.liveLink.message}
            </p>
          )}
        </div>

        {/* Technologies Used */}
        <div>
          <Label htmlFor="technologies">Technologies</Label>
          <Select
            onValueChange={(value) =>
              setValue("technologies", [value] as TProject["technologies"])
            }
          >
            <SelectTrigger className="dark:bg-gray-800 dark:text-white">
              <SelectValue placeholder="Select technologies used" />
            </SelectTrigger>
            <SelectContent className="dark:bg-gray-800 dark:text-white">
              {[
                "React",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "MongoDB",
                "Express",
                "TypeScript",
                "Firebase",
                "GraphQL",
                "Redux",
                "ShadCN UI",
                "Framer Motion",
              ].map((tech) => (
                <SelectItem key={tech} value={tech}>
                  {tech}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-[#2563EB] hover:bg-[#3B82F6] dark:bg-[#3B82F6] dark:hover:bg-[#2563EB] transition-all"
        >
          {isLoading ? "Creating..." : "Create Project"}
        </Button>
      </form>
    </div>
  );
};

export default ProjectCreateForm;
