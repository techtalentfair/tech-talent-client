import ProjectDetailsPage from "@/pages/ProjectDetailsPage/ProjectDetailsPage";
import React from "react";

type Params = Promise<{ projectId: string }>;

export default async function ProjectDetails(props: { params: Params }) {
  const params = await props.params;
  const projectId = params.projectId;

  return <ProjectDetailsPage projectId={projectId} />;
}
