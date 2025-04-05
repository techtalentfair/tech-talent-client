"use client";

import ScrollDownItem from "@/components/ScrollDownIteam";
import OurPartnersSection from "../Home/Sections/OurPartnersSection";
import SectionHeading from "@/components/SectionHeading";
import { projectsData } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";


export default function ProjectsPage(){
    
    return (
        <div className="bg-black text-white min-h-screen p-4 md:p-8">
            <header className="text-center m-8">
                <SectionHeading title="Previous Grads Projects" />
            </header>
            
            <div className="flex flex-col gap-4 ">
                {projectsData.map((project) => (
                <div 
                    key={project.id} 
                    className="w-full relative group "
                >
                    <Link 
                    href={`/project-details/${project.id}`}
                    className="block w-full"
                    passHref
                    >
                    <ProjectCard project={project} />
                    </Link>

                    <div className="absolute bottom-4 right-4 z-10">
                    </div>
                </div>
                ))}
                <ScrollDownItem />
            </div>
      
      <div className="mt-8">
        <OurPartnersSection />
      </div>
    </div>
    )
}