import React from "react";
import { agendaData } from '@/data/eventsData'
import OurAgenda from "./Sections/OurAgenda";

interface EventDetailsPageProps {
  eventId: string;
}

export default function EventDetailsPage({ eventId }: EventDetailsPageProps) {

  return (
    <>
    {eventId}
    <OurAgenda  eventsData={agendaData}/>
    </>
  );
}
