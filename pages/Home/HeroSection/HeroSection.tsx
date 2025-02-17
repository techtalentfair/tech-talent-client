import Image from "next/image";
import Link from "next/link";
import ScrollDownItem from "@/components/ScrollDownIteam";

function HeroSection() {

  return (
    <div
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
            University. Our mission is to assist students in navigating the
            ever-evolving world of technology and to prepare them for the
            competitive job market.
          </p>
          <Link href="/#Register">
            <button
              className="
                w-[200px]
                h-[50px]
              bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg mt-5
              transition duration-500 ease-in-out 
            "
            >
              Join us
            </button>
          </Link>
        </div>
        <div className="w-2/5 hidden md:block">
          <Image src="/assets/hero.png" width={590} height={560} alt="hero" />
        </div>
        {/* Light absolute images */}
        <Image
          className="absolute top-[-200px] left-[-250px]"
          src="/assets/light-purple-50.svg"
          width={400}
          height={400}
          alt="light-purple"
        />
        <Image
          className="hidden md:block absolute bottom-[-150px] left-[250px]"
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
        href="#Video"
      />
    </div>
  );
}

export default HeroSection;
