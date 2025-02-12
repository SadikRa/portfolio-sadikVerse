import BlogDetailsCard from "@/components/Blog/BlogDetailsCard";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  
  return (
    <div className="min-h-screen py-10 px-4 md:px-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <BlogDetailsCard id={blogId} />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
