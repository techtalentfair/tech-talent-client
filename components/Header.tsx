"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import ROUTES from "@/constants/routes";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pathname = usePathname();

  const linkList = [
    {
      title: "HOME",
      href: ROUTES.HOME,
    },
    {
      title: "ABOUT",
      href: ROUTES.ABOUT_US,
    },
    {
      title: "EVENTS",
      href: ROUTES.OUR_EVENTS,
    },
    {
      title: "PARTNERS",
      href: ROUTES.PARTNERS,
    },
    {
      title: "CONTACT US",
      href: ROUTES.CONTACT_US,
    },
  ];

  const socialMediaList = [
    {
      title: "Facebook",
      href: "https://www.facebook.com/people/TechTalent/61560302926189/",
      icon: <FiFacebook size={24} className="hover:text-purple-500 transition-colors" />,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/company/scitechtalent/",
      icon: <FiLinkedin size={24} className="hover:text-purple-500 transition-colors" />,
    },
    {
      title: "Twitter",
      href: "https://x.com/scitechtalent",
      icon: <FiTwitter size={24} className="hover:text-purple-500 transition-colors" />,
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/scitechtalent/",
      icon: <FiInstagram size={24} className="hover:text-purple-500 transition-colors" />,
    },
  ];

  return (
    <header className="fixed flex w-full max-w-screen-xl h-20 bg-transparent backdrop-blur-lg z-50 text-white p-6 md:pl-10 justify-between mx-auto left-0 right-0">
      <Link className="justify-start items-center gap-3 flex" href="/">
        <Image
          src="/TechTalent-Icon.svg"
          width={50}
          height={50}
          alt="Logo"
          className="rounded-full aspect-square object-cover"
        />
        <h1 className="text-3xl font-extrabold hover-glow">Tech Talent</h1>
      </Link>
      {/* [Desktop Navigation] */}
      <nav className="hidden md:flex justify-center items-center gap-2 md:gap-6 mx-auto ">
        {linkList.map((link) => (
          <Link href={link.href} key={link.title}>
            <div className={
              clsx(
                "hover:text-purple-500 font-bold transition-colors",
                pathname === link.href ? "text-purple-500" : "text-white"
              )
            }>{link.title}</div>
          </Link>
        ))}
      </nav>

      {/* [SOCIAL MEDIA ICONS] */}
      <div className="hidden md:flex items-center gap-7">
        {
          socialMediaList.map((socialMedia) => (
            <Link key={socialMedia.title} href={socialMedia.href}>
              {socialMedia.icon}
            </Link>
          ))
        }
      </div>

      {/* [Mobile Navigation] */}
      <div className="md:hidden flex items-center ">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <BurgerMenu isOpen={isMenuOpen} />
        </button>
        {isMenuOpen && (
          <div className="flex flex-col gap-12 absolute w-full h-screen top-20 left-0 backdrop-blur-lg bg-black bg-opacity-80 p-4 rounded-md">
            {/* [MENU] */}
            <nav className="flex flex-col gap-2  w-full">
              {linkList.map((link) => (
                <Link
                  className=
                    {clsx(
                      "flex justify-center items-center w-full h-10 rounded-md hover:text-purple-500 font-bold transition-colors ",
                      pathname === link.href ? "text-purple-500" : "text-white"
                    )}
                  
                  href={link.href}
                  key={link.title}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <div className="hover:text-purple-500 font-bold transition-colors">{link.title}</div>
                </Link>
              ))}
            </nav>
            {/* [SOCIAL MEDIA ICONS] */}
            <div className="flex w-full justify-center items-center gap-7">
              {
                socialMediaList.map((socialMedia) => (
                  <Link key={socialMedia.title} href={socialMedia.href}>
                    {socialMedia.icon}
                  </Link>
                ))
              }
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const BurgerMenu = ({ isOpen = false }) => {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center gap-2 relative">
      <div
        className={clsx(
          "w-6 h-0.5 absolute top-0 bg-white rounded-md transition-all duration-300 ease-in-out",
          {
            "transform translate-y-2.5 rotate-45 bg-red-700": isOpen,
          }
        )}
      ></div>
      <div
        className={clsx(
          "w-6 h-0.5 absolute top-2.5 bg-white rounded-md transition-all duration-300 ease-in-out",
          {
            "transform rotate-45 bg-transparent": isOpen,
          }
        )}
      ></div>
      <div
        className={clsx(
          "w-6 h-0.5 absolute top-5 bg-white rounded-md transition-all duration-300 ease-in-out",
          {
            "transform -translate-y-2.5 -rotate-45 bg-red-700": isOpen,
          }
        )}
      ></div>
    </div>
  );
};

export default Header;
