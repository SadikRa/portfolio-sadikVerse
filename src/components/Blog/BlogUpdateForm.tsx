/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
} from "@/redux/features/Blog/blogApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { IBlog } from "@/types";

type BlogUpdateFormValues = Partial<IBlog>;

const BlogUpdateForm = ({ id }: { id: string }) => {
  const router = useRouter();

  // Fetch the blog data
  const { data: blogResponse, isLoading } = useGetBlogByIdQuery(id);
  const blog = blogResponse?.data;

  const [updateBlog, { isLoading: isUpdating }] = useUpdateBlogMutation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BlogUpdateFormValues>({
    defaultValues: {
      title: "",
      thumbnails: "",
      content: "",
    },
  });

  useEffect(() => {
    if (blog) {
      setValue("title", blog.title || "");
      setValue("thumbnails", blog.thumbnails || "");
      setValue("content", blog.content || "");
    }
  }, [blog, setValue]);

  const onSubmit = async (data: BlogUpdateFormValues) => {
    if (!id) {
      toast.error("Blog ID is missing");
      return;
    }

    try {
      await updateBlog({ id, data }).unwrap();
      toast.success("Blog updated successfully!");
      router.push("/dashboard/blog");
    } catch (error) {
      toast.error("Failed to update blog");
    }
  };

  if (isLoading) {
    return <p className="text-center text-gray-400">Loading blog details...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-all duration-300">
      <h2 className="text-2xl font-bold text-[#2563EB] dark:text-[#3B82F6] text-center mb-6">
        Update Blog
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" {...register("title")} placeholder="Enter title" />
        </div>

        {/* Thumbnails */}
        <div>
          <Label htmlFor="thumbnails">Thumbnails URL</Label>
          <Input
            id="thumbnails"
            {...register("thumbnails")}
            placeholder="Enter thumbnail URL"
          />
        </div>

        {/* Content */}
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            {...register("content")}
            placeholder="Enter blog content"
            rows={5}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-[#2563EB] hover:bg-[#3B82F6] dark:bg-[#3B82F6] dark:hover:bg-[#2563EB] transition-all"
          disabled={isUpdating}
        >
          {isUpdating ? "Updating..." : "Update Blog"}
        </Button>
      </form>
    </div>
  );
};

export default BlogUpdateForm;
