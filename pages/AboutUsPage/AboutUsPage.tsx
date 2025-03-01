import React from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Ahmed M. Ezzeldeen",
      role: "Web Development Team Lead",
      image: "/assets/1726485686066.jpeg",
      description: "Leading the web development team, ensuring smooth functionality and performance of our projects."
    },
    {
      name: "Mohamed Hossam",
      role: "Teams Manager",
      image: "/assets/461481817_529861202983460_7786221624256922218_n.jpg",
      description: "Managing team coordination and workflow to maximize efficiency and collaboration."
    },
    {
      name: "Hossam Hassan",
      role: "Head of Project Management",
      image: "/assets/461925631_10234048655701011_236957675843214635_n.jpg",
      description: "Supervising projects from initiation to completion, ensuring quality and timely delivery."
    },
    {
      name: "Hossam Hassan",
      role: "Head of Project Management",
      image: "/assets/461925631_10234048655701011_236957675843214635_n.jpg",
      description: "Supervising projects from initiation to completion, ensuring quality and timely delivery."
    },
    {
      name: "Hossam Hassan",
      role: "Head of Project Management",
      image: "/assets/461925631_10234048655701011_236957675843214635_n.jpg",
      description: "Supervising projects from initiation to completion, ensuring quality and timely delivery."
    },
    {
      name: "Hossam Hassan",
      role: "Head of Project Management",
      image: "/assets/461925631_10234048655701011_236957675843214635_n.jpg",
      description: "Supervising projects from initiation to completion, ensuring quality and timely delivery."
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Header */}
      <section
  className="relative h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat 
             after:absolute after:inset-0 after:bg-gradient-to-r after:from-purple-900 after:to-purple-400 after:opacity-60"
  style={{ backgroundImage: "url('/assets/b7c48150c2b2c1bd0088b9f3b1730eee.jpeg')" }}
>
  <div className="relative text-center z-10 px-6">
    <h1 className="text-5xl font-bold text-white italic">
      <span className="text-yellow-500">TECH TALENT</span> Student Activity
    </h1>
    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
      Tech Talent is a vibrant community created specifically for the Computer Science department within the Faculty of Science at Cairo University. 
      Our mission is to assist students in navigating the ever-evolving world of technology and to prepare them for the competitive job market.
    </p>
  </div>
</section>


      {/* Video  */}
      <section className="flex justify-center items-center bg-gray-900">
  <video className="w-[1440px] h-[550px] object-cover" controls>
    <source src="/assets/TechTalent1080p_30f_20240615_152836.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>

      {/* Team  */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-left flex items-center italic">
          <span className="text-purple-400 text-4xl mr-2">#</span>
          <span className="text-white">Meet Our Team</span>
        </h2>

        {/* Dr. Hossam Hassan */}
        <div className="flex items-center bg-[#18181b] p-6 py-10 rounded-lg mt-16 shadow-lg w-2/3 mx-auto">
          <Image
            src="/assets/461925631_10234048655701011_236957675843214635_n.jpg"
            alt="Dr. Hossam Hassan"
            width={144}
            height={144}
            className="w-36 h-36 rounded-full mr-6 object-cover"
          />
          <div>
            <h3 className="text-lg font-bold text-white">Dr. Hossam Hassan</h3>
            <p className="text-sm text-yellow-400 font-semibold">Community Creator & Our Mentor</p>
            <p className="mt-2 text-gray-300 text-sm">
              Tech Talent is a vibrant community created specifically for the Computer Science department within the Faculty of Science at Cairo University. 
            </p>
            <div className="flex mt-3 space-x-3">
              <FaFacebook className="text-white text-lg cursor-pointer hover:text-blue-500" />
              <FaLinkedin className="text-white text-lg cursor-pointer hover:text-blue-700" />
              <FaTwitter className="text-white text-lg cursor-pointer hover:text-blue-400" />
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20 mt-32">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="relative w-72 bg-gradient-to-b from-purple-900 to-black p-6 rounded-lg text-center shadow-lg space-y-4 transition transform hover:scale-105"
            >
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-16">
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-sm text-yellow-400">{member.role}</p>
                <p className="mt-2 text-gray-200 text-sm">{member.description}</p>

                <div className="flex justify-center mt-4 space-x-3">
                  <FaFacebook className="text-white text-xl cursor-pointer hover:text-blue-500" />
                  <FaLinkedin className="text-white text-xl cursor-pointer hover:text-blue-700" />
                  <FaTwitter className="text-white text-xl cursor-pointer hover:text-blue-400" />
                </div>

                <div className="flex justify-end mt-4">
                  <button className="text-sm text-blue-400 hover:text-blue-600 transition">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
