import Image from "next/image";
import ScrollDownItem from "@/components/ScrollDownIteam";
import CustomButton from "@/components/CustomButton";

function HeroSection() {

  return (
    <section
      className="flex flex-col w-full justify-around items-center max-h-[750px] min-h-[calc(100vh-80px)]"
      id="Hero"
    >
      <div className="relative flex justify-between gap-9 items-center w-full">
        <div className="w-full md:w-3/5 flex flex-col 
        gap-3
        xl:gap-6
        
        ">
          <h2
            className="
          text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-7xl
          font-bold uppercase text-pretty"
          >
            TECH TALENT FAIR <br />
            Community
          </h2>
          <p className="
            text-gray-400
            text-lg
            xl:text-xl
            
            ">
            Tech Talent is a vibrant community created specifically for the
            Computer Science department within the Faculty of Science at Cairo
            University.<br /> Our mission is to assist students in navigating the
            ever-evolving world of technology and to prepare them for the
            competitive job market.
          </p>
            <CustomButton href="#" className="w-[200px] h-[50px]">
              Join us
            </CustomButton>
        </div>
        <div className="w-2/5 hidden md:block">
          <Image src="/assets/hero.png" width={590} height={560} alt="hero" />
        </div>
        {/* Light absolute images */}
        <Image
          className="absolute 
          top-[-150px]
          left-[-150px]
          md:top-[-200px] 
          md:left-[-250px]
          
          "
          src="/assets/light-purple-50.svg"
          width={400}
          height={400}
          alt="light-purple"
        />
        <Image
          className="md:block absolute
          top-[150px]
          right-[0px]
          md:top-[auto] 
          md:bottom-[-250px] 
          md:left-[150px]
          
          "
          src="/assets/light-pink-50.svg"
          width={400}
          height={400}

          alt="light-purple"
        />
        <Image
          className="hidden md:block absolute animate-pulse right-[-300px]"
          src="/assets/light-pink-20.svg"
          width={400}
          height={400}
          alt="light-purple"
        />
      </div>

      {/* Scroll down animation item */}
      <ScrollDownItem
        hoverColor="group-hover:text-purple-500"
        textColor="text-white"
        text="Discover more"
        href="#Upcoming-Events"
      />
    </section>
  );
}

export default HeroSection;
