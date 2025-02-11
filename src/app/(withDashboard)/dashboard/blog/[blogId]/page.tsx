import BlogUpdateForm from "@/components/Blog/BlogUpdateForm";
import React from "react";

const UpdateBlog = async ({ params }: { params: Promise<{ _id: string }> }) => {
  const { _id } = await params;

  console.log("project id", _id);

  return (
    <div>
      <BlogUpdateForm id={_id} />
    </div>
  );
};

export default UpdateBlog;
