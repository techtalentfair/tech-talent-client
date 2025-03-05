import React from "react";
import Link from "next/link";
import {
  IoCalendarOutline,
  IoLocationOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { DEventTimeSlot } from "@/types/database";


const EventCard: React.FC<DEventTimeSlot> = ({
  id,
  title,
  url,
  date,
  time,
  location,
  description,
  imageUri,
}) => {
  return (
    <div className="flex flex-col w-full md:p-10 p-5">
     <Link href={`/event-details/${id}`}>
        <h3 className="event-title text-xl sm:text-2xl md:text-3xl font-bold text-white pb-2 mb-2 relative cursor-pointer hover:text-purple-400 transition-all">
          {title}
        </h3>
      </Link>
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
          className="flex items-center hover:cursor-pointer"
          href={location.url ? location.url : "#" }
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
                  className="text-purple-400 hover:text-purple-500 transition-all ease-in-out duration-100"
                  size={16}
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

export default EventCard;