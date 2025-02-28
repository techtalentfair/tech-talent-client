"use client";

import CustomButton from "@/components/CustomButton";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import ROUTES from "@/constants/routes";
import { projectsData } from "@/data/projectsData";
import { useRouter } from "next/navigation";

function ProjectsSection() {
    const router = useRouter();
  
  return (
    <div
      className="container flex flex-col min-w-full min-h-[calc(100vh-80px)]" 
      id="Projects"
    >
      <div className='flex justify-between items-center'>
        <SectionHeading title="Projects" />
        <CustomButton
          className='uppercase italic font-bold'
          variant="secondary"
          onClick={() => router.push(ROUTES.PROJECTS)}>
          View all
        </CustomButton>
      </div>
      <div className="flex flex-col w-full min-h-screen md:ml-4">
        {projectsData.map((project, index) => (
          <ProjectCard project={project} key={`project-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
