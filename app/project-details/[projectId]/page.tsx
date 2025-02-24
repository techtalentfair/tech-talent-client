import ProjectDetailsPage from "@/pages/ProjectDetailsPage/ProjectDetailsPage";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProjectDetails(props: { params: { projectId: any } }) {
  const projectId = props.params.projectId;

  return (
    <ProjectDetailsPage projectId={projectId} />
  );
}
