  "use client" ;

  import SectionHeading from "@/components/SectionHeading";
  import Image from "next/image";
  import { IoCalendarOutline, IoLocationOutline, IoTimeOutline } from "react-icons/io5";
  import ArrowDown from "@/components/ArrowDown";

  export default function CardEvents() {
    const scrollToRegister = () => {
      document.getElementById("Register")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <>
        <section className="relative w-full p-6 h-[15vh] flex items-center  ">
        <SectionHeading title="Upcoming Events" />
        </section>

        <section className="relative w-full flex items-center justify-center text-center">
          <div className="max-w-5xl w-full mx-auto p-6 sm:p-8 bg-[#190221] border-8 sm:border-[12px] md:border-[15px] border-[#361251] rounded-2xl shadow-lg">
            
            <h2 className="text-[#C084FC] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold italic mb-4">
              CMD X Exhibition
            </h2>

            <div className="flex flex-col sm:flex-row sm:justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 text-lg sm:text-xl text-gray-300 mb-4">
              <div className="flex items-center space-x-2">
                <IoCalendarOutline size={24} color="rgb(192 132 252)" />
                <span>May 12 – Sep 3</span>
              </div>
              <div className="flex items-center space-x-2">
                <IoTimeOutline size={24} color="rgb(192 132 252)" />
                <span>05:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <IoLocationOutline size={24} color="rgb(192 132 252)" />
                <span>AUC New Cairo</span>
              </div>
            </div>

            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/assets/bac.jpeg"
                alt="Event"
                layout="fill"
                objectFit="cover"
                className="opacity-90"
              />
            </div>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mt-6 leading-relaxed px-2">
              Celebrate a tenth class of graphic design excellence at AUCs CmdX exhibition – showcasing
              transformative ideas from our visionary graduates. Vivamus semper mi ipsum, vitae finibus
              mauris commodo non. Mauris nibh orci, efficitur vel ex vitae, lacinia tincidunt metus.
            </p>

            {/* <button className="mt-6 text-[#A855F7] text-xl sm:text-2xl md:text-3xl font-semibold flex items-center justify-center space-x-2">
              <span>Register Now</span>
              <ArrowDown hoverColor="group-hover:text-purple-500" textColor="text-white" text="" href="#Video" />
            </button> */}

            <button
              className="mt-6 text-[#A855F7] text-xl sm:text-2xl md:text-3xl font-semibold flex items-center justify-center space-x-2"
              onClick={scrollToRegister}
            >
              <span>Register Now</span>
              <ArrowDown hoverColor="group-hover:text-purple-500" textColor="text-white" text="" />
            </button>

          </div>
        </section>
      </>
    );
  }
