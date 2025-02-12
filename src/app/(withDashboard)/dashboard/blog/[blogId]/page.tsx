import BlogUpdateForm from "@/components/Blog/BlogUpdateForm";

const UpdateBlog = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  return (
    <div>
      <BlogUpdateForm id={blogId} />
    </div>
  );
};

export default UpdateBlog;
