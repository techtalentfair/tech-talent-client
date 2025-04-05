import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Avatar from './Avatar';
import Link from 'next/link';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, imageUrl, socialLinks }) => {
  return (
    <div className="w-[299.39px] h-[277.72px] bg-[#F7F7F7] p-[22.71px] rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="w-full h-full flex flex-col items-center gap-[18.93px]">
        {/* Avatar Section */}
        <div className="relative w-[94.65px] h-[94.65px] ">
            <div className="absolute inset-0 rounded-full  bg-[#C7B9DA] overflow-hidden w-[75.72px] h-[75.72px] flex items-center justify-center mx-auto my-auto">
                <Avatar 
                imageUrl={imageUrl ||"/assets/0d753151f58657595136f67c584b5c8c.png"}
                altText={`${name}'s profile`}
                customSize
                bgColor="bg-[#C7B9DA]"
                className="w-full h-full"
                size="2xl"
                /> 
            </div>
        </div>

        {/* Info Section */}
        <div className="w-full flex flex-col gap-[15.14px]">
          {/* Name and Role */}
          <div className="flex flex-col gap-[7.57px]">
            <h3 className="w-full font-inter font-semibold text-[17.04px] leading-[26.5px] text-center text-black">
              {name}
            </h3>
            <p className="w-full font-inter font-normal text-[15.14px] leading-[22.71px] text-center text-[#A855F7]">
                {role}
            </p>
          </div>

          {/* Bio */}
          <div className="w-full font-inter font-normal text-[15.14px] leading-[22.71px] text-center text-[#222831]">
            <p>{bio}</p>
          </div>
        </div>

        {/* Social Links */}
        {socialLinks && (
          <div className="w-full flex justify-center gap-[15.14px]">
            {socialLinks.twitter && (
              <Link
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A4A7AE] hover:text-blue-400 transition-colors duration-300"
                aria-label={`${name}'s Twitter`}
              >
                <FaTwitter className="w-[18.13px] h-[17.35px]" />
              </Link>
            )}
            {socialLinks.linkedin && (
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A4A7AE] hover:text-blue-600 transition-colors duration-300"
                aria-label={`${name}'s LinkedIn`}
              >
                <FaLinkedin className="w-[18.13px] h-[17.35px]" />
              </Link>
            )}
            {socialLinks.github && (
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A4A7AE] hover:text-gray-900 transition-colors duration-300"
                aria-label={`${name}'s GitHub`}
              >
                <FaGithub className="w-[18.13px] h-[17.35px]" />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;