import React from 'react'
import ImageSectoin from "./Sections/ImageSection";
import CardEvents from "./Sections/CardEvents";
import RegisterSectionComponent from '@/components/RegisterSectionComponent';
import { agendaData , exampleEvent} from '@/data/eventsData'
import OurEvents from './Sections/OurEvents';

export default function EventsPage() {
  return (
    <>
        <ImageSectoin />
        <CardEvents />
        <RegisterSectionComponent eventId={exampleEvent.id} />
        <OurEvents  eventsData={agendaData}/>
    </>
  );
}
