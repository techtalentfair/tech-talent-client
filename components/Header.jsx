"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkList = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "About-us",
      href: "#About",
    },
    {
      title: "Partners",
      href: "#Partners",
    },
    {
      title: "Events",
      href: "#Events",
    },
    {
      title: "Projects",
      href: "#Projects",
    },
    {
      title: "Register",
      href: "#Register",
    },
  ];

  return (
    <header className="fixed w-full h-20 bg-black z-50 text-white p-4 md:pl-10 justify-between  flex">
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
            <div className="hover-glow">{link.title}</div>
          </Link>
        ))}
      </nav>

      {/* [Mobile Navigation] */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <BurgerMenu isOpen={isMenuOpen} />
        </button>
        {isMenuOpen && (
          <nav className="flex flex-col gap-2 absolute w-full h-screen top-20 left-0 bg-black bg-opacity-80 p-4 rounded-md">
            {linkList.map((link) => (
              <Link
                className="flex justify-center items-center w-full h-10 rounded-md hover-glow"
                href={link.href}
                key={link.title}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <div className="hover-glow">{link.title}</div>
              </Link>
            ))}
          </nav>
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
