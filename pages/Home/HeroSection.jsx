import Image from "next/image";
import Link from "next/link";
import { FaArrowDown, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function HeroSection() {
  const socialMedia = [
    {
      name: "facebook",
      link: "https://web.facebook.com/profile.php?id=61560302926189",
      icon: <FaFacebookSquare size={45} className="hover:text-purple-700" />,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/company/scitechtalent/",
      icon: <FaLinkedin size={45} className="hover:text-purple-700" />,
    },
    {
      name: "twitter",
      link: "https://twitter.com/@scitechtalent",
      icon: <FaXTwitter size={45} className="hover:text-purple-700" />,
    },
  ];

  return (
    <div
      className="container flex flex-col justify-around items-center min-w-full min-h-[calc(100vh-80px)]"
      id="Hero"
    >
      <div>
        <div className="flex w-full items-center justify-center space-x-2 md:space-x-4">
          <Image
            src="/assets/thunder.png"
            width={85}
            height={110}
            alt="thunder"
            className="w-10 sm:w-10 sm:h-auto md:w-12 lg:w-20 xl:w-24 2xl:w-28"
          />
          <h2
            className={`text-base sm:text-lg md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl inline-flex justify-center text-white  italic font-extrabold font-['Inter']`}
          >
            TECH TALENT FAIR 2024
          </h2>
          <Image
            src="/assets/thunder.png"
            width={85}
            height={110}
            alt="thunder"
            className="w-10 sm:w-10 sm:h-auto md:w-12 lg:w-20 xl:w-24 2xl:w-28"
          />
        </div>
        <p className="md:w-4/6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl 2xl:text-2xl flex justify-center text-center mx-auto text-neutral-400 font-medium font-['Inter']">
          Tech Talent is a vibrant community created specifically for the
          Computer Science department within the Faculty of Science at Cairo
          University. Our mission is to assist students in navigating the
          ever-evolving world of technology and to prepare them for the
          competitive job market.
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap-reverse flex-col-reverse sm:flex-row lg:gap-28 md:gap-20 sm:gap-10 gap-5">
        <Link href="/#Register">
          <button
            className="bg-[#683392] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg mt-5
              transition duration-500 ease-in-out 
            "
          >
            Join Us
          </button>
        </Link>
        {/* social media */}
        <div className="flex justify-center items-center space-x-4 mt-5">
          {socialMedia.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              rel="noreferrer"
              key={social.name}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
      <Link className="animate-bounce" href="#Video">
        <FaArrowDown className="hover:text-purple-700" size={35} />
      </Link>
    </div>
  );
}

export default HeroSection;
