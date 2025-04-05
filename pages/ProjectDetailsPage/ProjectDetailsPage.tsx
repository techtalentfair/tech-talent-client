import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CustomButton from "@/components/CustomButton";

import TeamMember from "@/components/TeamMember";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";


interface ProjectDetailsPageProps {
  projectId: string;
}

const codeString = `<!DOCTYPE html>
<html>
<head>
    <title>Change Text Example</title>
</head>
<body>

<p id="demo">This is a demonstration.</p>

<button onclick="changeText()">Click Me!</button>

<script>
function changeText() {
    document.getElementById("demo").innerHTML = "Text has changed!";
}
</script>

</body>
</html>`;
const unorderedItems = [
  {
    text: "unordered list item",
    bgClass: "bg-black",
    widthClass: "w-fit"
  },
  {
    text: "unordered list itemunordered list itemunordered list item unordered list itemunordered list itemunordered list item unordered list itemunordered list item",
    bgClass: "bg-black",
    widthClass: "w-full max-w-full md:max-w-[1328px]"
  },
  {
    text: "unordered list item",
    bgClass: "bg-black",
    widthClass: "w-fit"
  },
];
const orderedItems = [
  "First ordered list item",
  "Second ordered list item ",
  "Third ordered list item",
  "Fourth ordered list item ",
  "Fifth ordered list item",
  "Sixth ordered list item",
  "Seventh ordered list item",
  "Eighth ordered list element",
  "Ninth ordered list item",
  "Tenth ordered list item"
];
export default function ProjectDetailsPage({ projectId }: ProjectDetailsPageProps) {
  
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-black relative">
      {/* Image Section */}
      <div className="w-full h-[288px] overflow-hidden relative">
        <Image
          src="/assets/bac.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      <div className="bg-black w-[95%] max-w-[1440px] rounded-[15px] p-6 mt-[-80px] z-10">
        {/*Article Header */}
        <div className="flex flex-col w-full bg-black p-4 rounded-lg">
          <header className="w-full flex flex-wrap justify-between items-center bg-black p-4 rounded-lg">
            <SectionHeading title="Petopia is" />
            <CustomButton variant="primary" className="w-full sm:w-auto rounded-lg px-4 py-2">
              Related by <a className="text-[#EAB308] underline decoration-[#EAB308] hover:underline ml-2"> (2024 Grads Event)</a>
            </CustomButton>
          </header>
          <p className="text-white text-lg mt-4 text-start">
            Celebrate a tenth class of graphic design excellence at AUC&apos;s CmdX exhibition - showcasing transformative ideas from our visionary 
            graduates. Vivamus semper mi ipsum, vitae finibus mauris commodo non. Mauris nibh orci, efficitur vel ex vitae, lacinia tincidunt metus. 
            Suspendisse interdum fermentum lacus ac sodales. Nulla tincidunt vitae lectus eget aliquam. Maecenas sit amet ex sit amet nibh malesuada
            porta ut ac nisi. Donec egestas diam lectus, sed tempor augue lobortis sit amet. Pellentesque mi augue, viverra porta sodales.
          </p>
        </div>

        {/*Article Content (Story)*/}
        <div className="bg-black  max-w-[1360px] h-auto min-h-[2103px] flex flex-col gap-[10px] mt-14">
          <header className="flex flex-col gap-2.5 w-fit h-fit text-xl font-normal bg-black p-2">
            <SectionHeading title="Our Story" />
          </header>
          <div className="w-full max-w-[1360px] h-fit min-h-[2045px] pt-3 pr-4 pb-4 pl-4 bg-black">  
            <div className="inline-flex flex-col gap-2.5 w-fit h-fit bg-black">
              <h1 className="w-[115px] h-[30px] font-sans font-bold text-2xl leading-tight tracking-normal align-middle bg-black">
                Heading1
              </h1>
            </div>
            <div className="w-[86px] h-[35px] pt-[12px] gap-2.5 bg-black">
              <h2 className="w-[86px] h-[23px] font-sans font-bold text-lg leading-[125%] tracking-normal align-middle bg-black ">
                Heading2
              </h2>
            </div>
            <div className="w-fit h-fit pt-3 flex flex-col gap-2.5 bg-black">
              <h3 className="w-[77px] h-[20px] font-sans font-bold text-[16px] leading-[125%] tracking-normal align-middle bg-black">
                Heading3
              </h3>
            </div>
            <div className="w-fit h-fit pt-4 flex flex-col gap-2.5 bg-black">
              <h1 className="w-[115px] h-[30px] font-sans font-bold text-2xl leading-tight tracking-normal align-middle bg-black">
                  Heading1
              </h1>
            </div>
            <div className="max-w-[1328px] w-full mx-auto h-fit pt-4 flex flex-col gap-2.5 bg-black  p-4  sm:mt-6 md:mt-8">
              <p className="w-full font-sans font-normal text-sm md:text-[14px] leading-[150%] tracking-normal bg-black text-white p-2 rounded overflow-hidden text-ellipsis line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quis lobortis nisl cursus bibendum sit nulla accumsan sodales ornare.
                At urna viverra non suspendisse neque, lorem. 
                Pretium condimentum pellentesque gravida id etiam sit sed arcu euismod.
                Rhoncus proin orci duis scelerisque molestie cursus tincidunt aliquam.
              </p>
            </div>
            <div className="max-w-[1328px] w-full mx-auto h-fit pt-4 flex flex-col gap-2.5 bg-black  p-4  sm:mt-6 md:mt-8">
              <p className="w-full font-sans font-normal text-sm md:text-[14px] leading-[150%] tracking-normal bg-black text-white p-2 rounded overflow-hidden text-ellipsis line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quis lobortis nisl cursus bibendum sit nulla accumsan sodales ornare.
                At urna viverra non suspendisse neque, lorem. 
                Pretium condimentum pellentesque gravida id etiam sit sed arcu euismod.
                Rhoncus proin orci duis scelerisque molestie cursus tincidunt aliquam.
              </p>
            </div>
            <div className="w-full max-w-[1328px] h-[500px] md:h-[650px] lg:h-[765px] pt-[12px] bg-black overflow-hidden">
              <img 
                src="/assets/OurStoryImg.jpeg" 
                alt="Our Story"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full max-w-[1328px] h-fit pt-3 sm:pt-4 flex flex-col gap-2.5 sm:gap-3 bg-black">
              <div className="w-full sm:w-[226px] h-[21px] gap-[2px] text-sm sm:text-base">
                <Link  href="#" className="w-full h-full bg-black font-sans font-normal text-[14px] leading-[150%] tracking-normal flex items-center justify-center  text-[#0062B8]">
                  Link text reuse anchor component
                </Link>
              </div>
            </div>
            <div className="bg-slate-950 w-full max-w-[1328px] h-[13px] pt-3">
              <hr />
            </div>
            <ul className="w-full max-w-[1328px] h-fit pt-3 flex flex-col gap-1.5 bg-black font-sans font-normal text-sm md:text-base list-disc leading-[150%] tracking-normal items-start pl-9 space-y-2 p-4">
              {unorderedItems.map((item, index) => (
                <li 
                  key={index}
                  className={`${item.widthClass} h-fit pl-[3px] break-words ${item.bgClass} text-white px-2 py-1 rounded`}
                >
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="inline-flex h-[46px] flex-col gap-2.5 w-fit pt-4 ga-8.5 bg-black">
              <h1 className="w-[115px] h-[30px] font-sans font-bold text-2xl leading-tight tracking-normal align-middle  bg-black">
                Heading1
              </h1>
            </div>
            <div className="w-[86px] h-[35px] pt-[12px] gap-2.5 bg-black">
              <h2 className="w-[86px] h-[23px] font-sans font-bold text-lg leading-[125%] tracking-normal align-middle bg-[green]bg-red-600 ">
                Heading2
              </h2>
            </div>
            <div className="w-fit h-fit pt-3 flex flex-col gap-2.5 bg-black">
              <h3 className="w-[77px] h-[20px] font-sans font-bold text-[16px] leading-[125%] tracking-normal align-middle bg-black">
                Heading3
              </h3>
            </div>
            <div className="max-w-[1328px] w-full mx-auto h-fit pt-3 flex flex-col gap-2.5 bg-black p-4 mt-4 sm:mt-6 md:mt-8">
              <p className="w-full font-sans font-normal text-sm md:text-[14px] leading-[150%] tracking-normal bg-black text-white p-2 rounded overflow-hidden text-ellipsis line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quis lobortis nisl cursus bibendum sit nulla accumsan sodales ornare.
                At urna viverra non suspendisse neque, lorem. 
                Pretium condimentum pellentesque gravida id etiam sit sed arcu euismod.
                Rhoncus proin orci duis scelerisque molestie cursus tincidunt aliquam.
              </p>
            </div>
            <div className="w-full max-w-[95vw] md:max-w-[1328px] h-fit rounded pt-3 pb-3 md:pt-4 md:pb-4 mx-auto flex flex-col justify-between bg-black shadow-sm">
              <div className="w-full h-8 bg-[#FFFFFF1A] px-4 py-2 flex items-center">
                <p className="w-[72px] h-4 font-mono font-medium text-xs leading-none tracking-normal text-white">
                  Code Block
                </p>
              </div>  
              {/* Code Content Area */}
              <div className="w-full h-fit p-4 flex flex-col gap-2 bg-black text-gray-200 font-mono text-sm">
                <pre className="flex overflow-x-auto">
                  <code className="block">
                    {codeString.split('\n').map((line, i) => (
                      <div key={i} className="flex">
                        <span className="text-gray-500 w-8 flex-shrink-0">{i + 1}</span>
                        <span>{line}</span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
            <div className="max-w-full sm:max-w-[443px] h-fit flex flex-col gap-2 sm:gap-2.5 bg-[#FFFFFF1A] rounded-sm p-1 items-start">
             <div className="w-fit max-w-full  h-fit max-h-[25px] rounded-[4px]  px-2 py-0.5 gap-2.5 items-start">
                <p className=" w-full max-w-[427px] h-[21px] font-inconsolata font-normal text-xs sm:text-[14px]  items-start  leading-[1.5] tracking-normal align-middle overflow-hidden text-ellipsis whitespace-nowrap px-2  ">
                  inline code textcode textcode textcode textcode textcode text
                </p>
             </div>
            </div>
            <div className="w-full max-w-[1328px] h-fit min-h-[33px] pt-3 bg-black flex items-start justify-start px-4 sm:px-6">
              <div className="w-full h-[21px] flex items-start justify-start ml-[-25px] gap-4 rounded-md bg-black">
                <span className="w-px h-full bg-white"></span>
                {/* Text content */}
                <p className=" w-full max-w-[371px] h-full font-sans font-normal text-xs sm:text-sm md:text-[14px] leading-[1.5] tracking-normal  bg-black  text-white px-3 py-0.5 truncate">
                  Nothing is impossible, the word itself says &quot;I&apos;m possible!&quot;
                </p>
              </div>
            </div>
            <ol className="w-full max-w-[1328px] h-fit p-4 flex flex-col gap-3  bg-black font-sans font-normal text-sm md:text-base leading-[1.5] tracking-normal list-decimal  pl-9 marker:text-white  marker:font-bold   ">
              {orderedItems.map((item, index) => (
                <li key={index} className="  w-full  h-fit   px-3 py-1   bg-black   text-white   rounded b reak-wordsm l-4">
                  {item}
                </li>
              ))}
            </ol>

          </div>
        </div>
        {/* Team Members Section */}
        <div className="w-full max-w-[1287px] min-h-[500px] flex flex-col items-center gap-6 p-6 mt-6 rounded-lg bg-black ">
          <header className="text-center">
            <SectionHeading title="Team Members" />
          </header>
          {projectsData.find(project => project.id === projectId)?.teamMembers?.length ? (
            <div className="flex flex-wrap justify-center gap-6 w-full">
              {projectsData .find(project => project.id === projectId) ?.teamMembers ?.map((member, index) => (
                  <div key={`${member.name}-${index}`}
                    className="flex justify-evenly w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
                  >
                    <TeamMember
                      name={member.name}
                      role={member.role}
                      imageUrl={member.imageSrc || "/assets/default-profile.png"}
                      socialLinks={{
                        linkedin: member.url || "#",
                        twitter: "#",
                        github: "#"
                      }}
                      bio={member.bio || "No bio available"}
                    />
                  </div>
                ))
              }
            </div>
          ) : (
            <p className="text-white">No team members found for this project { projectId }</p>
          )}
        </div>
        </div>
          </div>
    );
}

