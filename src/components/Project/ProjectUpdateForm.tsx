/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
} from "@/redux/features/Project/projectApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { TProject } from "@/types";

type ProjectUpdateFormValues = Partial<TProject>;

const ProjectUpdateForm = ({ id }: { id: string }) => {
  const router = useRouter();

  const { data: project, isLoading } = useGetProjectByIdQuery(id as string);
  const [updateProject, { isLoading: isUpdating }] = useUpdateProjectMutation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProjectUpdateFormValues>({
    defaultValues: {
      title: "",
      description: "",
      image: "",
      liveLink: "",
      technologies: [],
    },
  });

  useEffect(() => {
    if (project) {
      setValue("title", project.title);
      setValue("description", project.description);
      setValue("image", project.image);
      setValue("liveLink", project.liveLink);
      setValue("technologies", project.technologies || []);
    }
  }, [project, setValue]);

  const onSubmit = async (data: ProjectUpdateFormValues) => {
    if (!id) {
      toast.error("Project ID is missing");
      return;
    }

    try {
      await updateProject({ id, data }).unwrap();
      toast.success("Project updated successfully!");
      router.push("/dashboard/");
    } catch (error) {
      toast.error("Failed to update project");
    }
  };

  if (isLoading) {
    return (
      <p className="text-center text-gray-400">Loading project details...</p>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-all duration-300">
      <h2 className="text-2xl font-bold text-[#2563EB] dark:text-[#3B82F6] text-center mb-6">
        Update Project
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" {...register("title")} placeholder="Enter title" />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            {...register("description")}
            placeholder="Enter project description"
            rows={5}
          />
        </div>

        <div>
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            {...register("image")}
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <Label htmlFor="liveLink">Live Link</Label>
          <Input
            id="liveLink"
            {...register("liveLink")}
            placeholder="Enter live project URL"
          />
        </div>

        <div>
          <Label htmlFor="technologies">Technologies (comma separated)</Label>
          <Input
            id="technologies"
            {...register("technologies")}
            placeholder="e.g., React, Tailwind, TypeScript"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#2563EB] hover:bg-[#3B82F6] dark:bg-[#3B82F6] dark:hover:bg-[#2563EB] transition-all"
          disabled={isUpdating}
        >
          {isUpdating ? "Updating..." : "Update Project"}
        </Button>
      </form>
    </div>
  );
};

export default ProjectUpdateForm;
