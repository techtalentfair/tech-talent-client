'use client';

import {
  IoCalendarOutline,
  IoLocationOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import React from "react";

interface Event {
  title: string;
  url: string | null;
  date: string;
  time: string;
  location: {
    name: string;
    url?: string;
  };
  description: string;
  imageUri: string;
}

const eventsData: Event[] = [
  {
    title: "Smart College Management System (SCMS)",
    url: null,
    date: "July 2",
    time: "09:30 AM",
    location: { name: "Mosharafa Hall" },
    description:
      "Smart College Management System (SCMS) is an innovative online platform designed to streamline and enhance all academic and administrative processes within a college.",
    imageUri: "/assets/SCMS.png",
  },
  {
    title: "Scholar Sync",
    url: null,
    date: "July 2",
    time: "09:50 AM",
    location: { name: "Mosharafa Hall" },
    description:
      "The project goal is to make it easy for college admins to check and manage professors' information for fast reporting whenever needed.",
    imageUri: "/assets/ScholarSync.png",
  },
  {
    title: "Petopia",
    url: null,
    date: "July 2",
    time: "10:10 AM",
    location: {
      name: "Mosharafa Hall",
    },
    description:
      '"Petopia" is website and mobile app, It is concerned with caring for pets, solving the problems they face in life, share feeds with others, selling the necessary products they need, and ways to communicate together, and thus this program is considered a complete community for pets.',
    imageUri: "/assets/Petopia.jpg",
  },
];

const EventCard: React.FC<Event> = ({ title, url, date, time, location, description, imageUri }) => {
  return (
    <div className="flex flex-col w-full md:p-10 p-5">
      <a href={url ?? ""} target="_blank" rel="noopener noreferrer">
        <h3 className="event-title md:after:w-10 md:after:h-10 md:after:-left-16 md:after:top-0 sm:after:w-6 sm:after:h-6 sm:after:-left-[34px] sm:after:top-1 after:w-5 after:h-5 after:-left-8 after:top-1 text-xl sm:text-2xl md:text-3xl font-bold text-white pb-2 mb-2 relative after:border-purple-700 hover:text-purple-400 hover:cursor-pointer transition-all ease-in-out duration-100">
          {title}
        </h3>
      </a>
      <div className="flex gap-5 mb-8 flex-wrap">
        <div className="flex items-center">
          <IoCalendarOutline size={24} color="rgb(192 132 252)" />
          <h4 className="text-lg font-semibold text-white ml-2">{date}</h4>
        </div>
        <div className="flex items-center">
          <IoTimeOutline size={24} color="rgb(192 132 252)" />
          <h4 className="text-lg font-semibold text-white ml-2">{time}</h4>
        </div>
        <a
          className="flex items-center hover:cursor-pointer "
          href={location.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLocationOutline size={24} color="rgb(192 132 252)" />
          <h4 className="text-lg font-semibold text-white ml-2 hover:text-purple-400 transition-all ease-in-out duration-100">
            {location.name}
          </h4>
        </a>
      </div>
      <div className="flex justify-between mb-8 flex-wrap-reverse">
        <div className="flex flex-col w-full lg:w-2/4">
          <p className="whitespace-pre-line text-sm sm:text-base md:text-lg">
            {description}
          </p>
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center text-[16px] mt-2 gap-2 hover:gap-4 text-purple-400 hover:text-purple-500 hover:cursor-pointer transition-all ease-in-out duration-100">
                Learn More
                <FaArrowRight
                  className="text-purple-400 hover:text-purple-500 transition-all ease-in-out duration-100 "
                  size="16px"
                  color="rgb(168 85 247)"
                />
              </span>
            </a>
          )}
        </div>
        {imageUri && (
          <div
            className="relative flex justify-center items-center rounded-md w-full lg:w-2/6 mb-6 md:mt-[-3.5rem] max-w-[100%] aspect-w-1 aspect-h-1"
            style={{
              aspectRatio: "1/1",
              backgroundImage: `url(${imageUri})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "multiply",
            }}
          >
            <div className="w-full h-full absolute inset-0 rounded-md bg-black bg-opacity-50 transition-opacity duration-300 opacity-100 overflow-y-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="object-contain bg-center w-full h-full hover:h-auto"
                src={imageUri}
                alt={title}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EventsList: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {eventsData.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventsList;
