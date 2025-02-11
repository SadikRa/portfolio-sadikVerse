import BlogDetailsCard from "@/components/Blog/BlogDetailsCard";

const BlogDetailsPage = ({ params }: { params: { blogId: string } }) => {
  const { blogId } = params;

  return (
    <div className="min-h-screen py-10 px-4 md:px-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <BlogDetailsCard id={blogId} />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
