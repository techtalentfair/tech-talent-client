import React from 'react'
import ImageSectoin from "./Sections/ImageSection";
import CardEvents from "./Sections/CardEvents";
import EventsList from "@/components/EventsList";
import RegisterSectionComponent from '@/components/RegisterSectionComponent';
import { agendaData , exampleEvent} from '@/data/eventsData'

export default function EventsPage() {
  return (
    <>
        <ImageSectoin />
        <CardEvents />
        <RegisterSectionComponent eventId={exampleEvent.id} />
        <EventsList  eventsData={agendaData}/>
    </>
  );
}
