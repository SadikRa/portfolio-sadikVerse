"use client";

import {
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
} from "@/redux/features/Project/projectApi";
import { useParams } from "next/navigation";

const UpdateProject = () => {
  const { id } = useParams<{ id: string }>();

  const { data: product, isLoading } = useGetProjectByIdQuery(id as string);
  const [updateProject, { isLoading: isUpdating }] = useUpdateProjectMutation();

  return <div>well hello</div>;
};

export default UpdateProject;
