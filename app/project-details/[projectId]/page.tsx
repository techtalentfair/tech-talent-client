import ProjectDetailsPage from "@/pages/ProjectDetailsPage/ProjectDetailsPage";
import React from "react";

interface ProjectDetailsProps {
  params: {
    projectId: string;
  };
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  return <ProjectDetailsPage projectId={params.projectId} />;
}
