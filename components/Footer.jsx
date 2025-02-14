"use client";

import Link from "next/link";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialMedia = [
    {
      name: "facebook",
      link: "https://web.facebook.com/profile.php?id=61560302926189",
      icon: <FaFacebookSquare size={24} className="hover:text-purple-700" />,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/company/scitechtalent/",
      icon: <FaLinkedin size={24} className="hover:text-purple-700" />,
    },
    {
      name: "twitter",
      link: "https://twitter.com/@scitechtalent",
      icon: <FaXTwitter size={24} className="hover:text-purple-700" />,
    },
  ];

  return (
    <footer className="w-full h-20 flex flex-wrap flex-col sm:flex-row text-white lg:px-10 md:px-5 sm:px-5 px-5 py-4 justify-between items-center">
      <p className="text-sm sm:text-base md:text-lg">All Copyrights belong to <a className="hover:text-purple-600" href="#" target="_blank" rel="noopener noreferrer">Tech Talent</a> {new Date().getFullYear()}</p>
      <div className="flex justify-center items-center gap-2">
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
    </footer>
  );
};

export default Footer;
