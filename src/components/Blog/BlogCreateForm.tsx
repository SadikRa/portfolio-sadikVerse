"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBlogMutation } from "@/redux/features/Blog/blogApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface BlogFormData {
  title: string;
  thumbnails: string;
  content: string;
}

const BlogCreateForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BlogFormData>();
  const router = useRouter();

  const [createBlog, { isLoading }] = useCreateBlogMutation();

  const onSubmit: SubmitHandler<BlogFormData> = async (data) => {
    try {
      await createBlog(data).unwrap();
      toast.success("Blog created successfully!");
      router.push("/dashboard/blog");
    } catch (error) {
      toast.error("Failed to create blog.");
      console.error(error);
    }
  };

  // Watch the input values to check conditions
  const title = watch("title", "");
  const content = watch("content", "");
  const isButtonDisabled = title.length < 5 || content.length < 20;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-all duration-300">
      <h2 className="text-2xl font-bold text-[#2563EB] dark:text-[#3B82F6] text-center mb-6">
        Add New Blog
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Blog Title */}
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            {...register("title", { required: "Title is required" })}
            placeholder="Enter blog title"
            className="dark:bg-gray-800 dark:text-white"
          />
          {errors.title && (
            <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Blog Thumbnail */}
        <div>
          <Label htmlFor="thumbnails">Thumbnail URL</Label>
          <Input
            id="thumbnails"
            {...register("thumbnails", {
              required: "Thumbnail URL is required",
            })}
            placeholder="Enter thumbnail image URL"
            className="dark:bg-gray-800 dark:text-white"
          />
          {errors.thumbnails && (
            <p className="text-sm text-red-500 mt-1">
              {errors.thumbnails.message}
            </p>
          )}
        </div>

        {/* Blog Content */}
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            {...register("content", { required: "Content is required" })}
            placeholder="Enter blog content"
            className="dark:bg-gray-800 dark:text-white"
            rows={6}
          />
          {errors.content && (
            <p className="text-sm text-red-500 mt-1">
              {errors.content.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isButtonDisabled || isLoading}
          className={`w-full transition-all ${
            isButtonDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#2563EB] hover:bg-[#3B82F6] dark:bg-[#3B82F6] dark:hover:bg-[#2563EB]"
          }`}
        >
          {isLoading ? "Creating..." : "Create Blog"}
        </Button>
      </form>
    </div>
  );
};

export default BlogCreateForm;
