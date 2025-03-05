'use client'
import { agendaData } from "@/data/eventsData";
import OurAgenda from "./Sections/OurAgenda";
import Header from "./Sections/Header";

interface EventDetailsPageProps {
  eventId: string;
}

export default function EventDetailsPage({ eventId }: EventDetailsPageProps) {

  return (
    <>
      <Header eventId={eventId} />
      <OurAgenda eventsData={agendaData}/>
      </>
  );
}