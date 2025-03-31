import React from "react";
import Player from "next-video/player";
import { DProjectModel } from "@/types/database";

interface ProjectCardProps {
  project: DProjectModel;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row w-full md:p-4 ">
      {/* 
        we can use the Video component from next-video package to display the video, and host the video on a server or a cloud storage service like MUX , AWS S3, Google Cloud Storage, or Firebase Storage.
        to more about next-video package, visit https://next-video.dev/
      */}
      {/* <Video src={KIDZO} /> */}
      {/* <div className="flex flex-col md:flex-row w-full md:p-4 bg-green-700 "> */}
        {/* <Player
          src={project.videoUrl || ""}
          className="min-w-full md:w-1/2 h-96 md:h-auto "
        /> */}

     
<div className="relative w-full  bg-zinc-800 ">
    <Player
      src={project.videoUrl || ""}
      className="min-w-full md:w-1/2 h-96 md:h-auto w-full  bg-zinc-800 overflow-hidden"
    />
  <div className="absolute top-6 left-6 bg-[#753BA2] hover:bg-[#753BA2]/80 rounded-[15px] px-5 py-2.5 transition-colors duration-300">
    <span className="text-white text-sm font-medium">
      {project.relatedEventsTitles}
    </span>
  </div>
</div>
     
     
      <div className="flex flex-col w-full sm:p-4 px-0 py-4 " >
        <h2 className="md:text-3xl sm:text-2xl text-xl font-bold text-white">{project.title}</h2>
        <p className="text-[#BDBDBD] mt-4">{project.description}</p>
        {/* if the url is not null, then display the Know More button*/}
        {
          project.url && (
            <a
              href={project.url}
              target="_blank"
              className="text-purple-500 font-extrabold mt-2 hover:text-white hover:cursor-pointer hover:underline hover:transition-all duration-300 ease-in-out"
            >
              Know More
            </a>
          )
        }
        <div className="flex flex-row flex-wrap mt-10 items-center">
          {project.teamMembers.map((member, index) => (
            <div
              className="flex items-center justify-between gap-3 mb-6 pr-3 mr-3 border-r-[1px] last:border-r-transparent border-r-[#999999] "
              key={`member-${index}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.imageSrc}
                alt={member.name}
                className="w-6 h-6 rounded-full"
              />
              <a
                href={member.url || "#"}
                target="_blank"
                className="text-white font-bold hover:text-purple-500 hover:cursor-pointer"
                rel="noreferrer"
              >
                {member.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

