'use client'
import { Calendar, Clock, MapPin } from "lucide-react";
import { agendaData } from "@/data/eventsData";
import CustomSlider from "./Slider";

interface EventDetailsPageProps {
  eventId: string;
}

export default function Header({ eventId }: EventDetailsPageProps) {
  const event = agendaData.find((e) => e.id === eventId);
  

  if (!event) {
    return <p className="text-center text-gray-400 text-lg mt-10">Event not found</p>;
  }

  return (
    <>
      <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 py-10">

      <h1 className="text-3xl sm:text-5xl font-bold text-purple-400  border-purple-600 pb-3 text-center w-full max-w-4xl">
        {event.title}
      </h1>

      <div className="w-full h-1 bg-purple-600 my-4"></div>

      <CustomSlider eventId={eventId} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-lg sm:text-2xl text-gray-300 mt-6 text-center">
        <div className="flex items-center justify-center gap-2">
          <Calendar className="w-10 h-10 sm:w-14 sm:h-14 text-purple-400" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Clock className="w-10 h-10 sm:w-14 sm:h-14 text-purple-400" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <MapPin className="w-10 h-10 sm:w-14 sm:h-14 text-purple-400" />
          <span>{event.location.name}</span>
        </div>
      </div>
      <p className="mt-6 text-gray-300 text-lg sm:text-2xl leading-relaxed max-w-3xl text-center">
        {event.description}
      </p>
    </div>
      </>
  );
}