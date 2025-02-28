import React from "react";

interface ProjectDetailsPageProps {
  projectId: string;
}

export default function ProjectDetailsPage({ projectId }: ProjectDetailsPageProps) {

  return (
    <div className="flex justify-center items-center h-screen">
      Project details page with Id = {projectId}
    </div>
  );
}
