import BlogUpdateForm from "@/components/Blog/BlogUpdateForm";

const UpdateBlog = ({ params }: { params: { blogId: string } }) => {
  const { blogId } = params;

  return (
    <div>
      <BlogUpdateForm id={blogId} />
    </div>
  );
};

export default UpdateBlog;
