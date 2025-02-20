import "@/app/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { IoCalendarOutline, IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import ArrowDown from "@/components/ArrowDown";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="w-full mx-auto pt-20 flex-col flex">
      <section className="relative w-full h-[80vh] flex items-center justify-center text-center">
        <Image
          src="/assets/bac.jpeg" 
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Event Background"
          className="absolute inset-0"
        />

        <div className="absolute inset-0 bg-[#A855F7] opacity-30"></div>

        <div className="relative z-10 px-6 md:px-16 text-white">
          <h1 className="text-5xl font-bold italic text-yellow-400">
            TECH TALENT <span className="text-white">Events</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed">
            Lorem Vivamus semper mi ipsum, vitae finibus mauris commodo non.
            Mauris nibh orci, efficitur vel ex vitae, lacinia tincidunt metus.
            Suspendisse interdum fermentum lacus ac sodales. Nulla tincidunt
            vitae lectus eget aliquam
            Lorem Vivamus semper mi ipsum, vitae finibus mauris commodo non.
            Mauris nibh orci, efficitur vel ex vitae, lacinia tincidunt metus.
            Suspendisse interdum fermentum lacus ac sodales. Nulla tincidunt
            vitae lectus eget aliquam
            Lorem Vivamus semper mi ipsum, vitae finibus mauris commodo non.
            Mauris nibh orci, efficitur vel ex vitae, lacinia tincidunt metus.
            Suspendisse interdum fermentum lacus ac sodales. Nulla tincidunt
            vitae lectus eget aliquam
          </p>
        </div>
      </section>

      <section className="relative w-full p-6 h-[15vh] flex items-center  ">
        <SectionHeading title="Upcoming Events" />
      </section>
        
      <section className="relative w-full flex items-center justify-center text-center">

      <div className="max-w-[90%] mx-auto p-8 bg-[#190221] border-[15px] border-[#361251] rounded-2xl shadow-lg">
      
      <h2 className="text-[#C084FC] text-[77.87px] font-extrabold italic mb-2">
      CMD X Exhibition
      </h2>

      <div className="flex items-center space-x-4 text-[25.96px] text-gray-300 mb-4">
        <div className="flex items-center space-x-1">
          <IoCalendarOutline size={24} color="rgb(192 132 252)" />
          <span>May 12 – Sep 3</span>
        </div>
        <div className="flex items-center space-x-1">
          <IoTimeOutline size={24} color="rgb(192 132 252)" />
          <span>05:00 pm</span>
        </div>
        <div className="flex items-center space-x-1">
          <IoLocationOutline size={24} color="rgb(192 132 252)" />
          <span>AUC New Cairo</span>
        </div>
      </div>

      <div className="relative w-full h-[700px] md:h-[300px] bg-gray-800 rounded-lg overflow-hidden">
        <Image
          src="/assets/bac.jpeg"
          alt="Event"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
      </div>

      <p className="text-gray-300 text-[32.44px] mt-4">
      Celebrate a tenth class of graphic design excellence at AUCs CmdX exhibition - showcasing 
        transformative ideas from our visionary graduates. Vivamus semper mi ipsum, vitae finibus 
        mauris commodo non. Mauris nibh orci, efficitur vel ex vitae, lacinia tincidunt metus.
      </p>

      <button className="mt-4 text-[#A855F7] text-[40.82px] font-semibold flex items-center space-x-2">
        <span>Register Now</span>  
        <span></span>
        <ArrowDown
        hoverColor="group-hover:text-purple-500"
        textColor="text-white"
        text=""
        href="#Video"
      />      
      </button>
    </div>
      </section>

      <section className="relative w-full p-6 h-[15vh] flex items-center  ">
        <SectionHeading title="List of our Events " />
      </section>

      <section className="container p-10 flex flex-col min-w-full min-h-[calc(100vh-80px)] py-20">
        <EventCard/>
    </section>
    </main>
      <Footer />
    </>
  );
}
