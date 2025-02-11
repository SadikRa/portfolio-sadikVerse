const BlogDetails = async ({
  params,
}: {
  params: Promise<{ _id: string }>;
}) => {
  const { _id } = await params;
  console.log("blg id", _id);
  return (
    <div>
      <h1>well hello</h1>
    </div>
  );
};

export default BlogDetails;
